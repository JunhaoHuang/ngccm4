
# NGCCM4

## Introduction
This repository aims to provide an automated tools, similar to [pqm4](https://github.com/mupq/pqm4) for benchmarking algorithms submitted to the New Generation Commercial Cryptography ([NGCC](https://niccs.org.cn/symmbzyjy/tzgg/pc/content/1976155884915003392/content_1976155884915003392.html)) issued by the Institute of Commercial Cryptography Standards (ICCS) in China.

Authors: [Junhao Huang](https://github.com/JunhaoHuang), junhaohuang@smu.edu.sg, Singapore Management University.

--------------------
## Set-up/Installation

The makefile system does not depend on source files outside this repository, but it does require a few host tools to be installed:

- `make`
- `python3`
- `arm-none-eabi-gcc`, `arm-none-eabi-cpp`, `arm-none-eabi-objcopy`, `arm-none-eabi-size`
- `qemu-system-arm` for `PLATFORM=mps2-an386` and `qemu-run`
- `openocd` only if you want to flash and debug on real hardware

On Ubuntu/Debian, install them with:

```bash
sudo apt update
sudo apt install -y \
  build-essential \
  gcc-arm-none-eabi \
  binutils-arm-none-eabi \
  libnewlib-arm-none-eabi \
  python3 \
  qemu-system-arm \
  openocd
```

Tool purpose:

- `gcc-arm-none-eabi` and `binutils-arm-none-eabi` provide the Cortex-M4 cross compiler and binary utilities used by the makefiles.
- `python3` is needed by `libopencm3/scripts/genlink.py` during linker-script and device setup.
- `qemu-system-arm` is required only for QEMU-based runs on `mps2-an386`.
- `openocd` is optional and is only needed for flashing supported STM32 boards.

Quick verification:

```bash
arm-none-eabi-gcc --version
python3 --version
qemu-system-arm --version
openocd --version
```

If you do not need hardware flashing, `openocd` can be omitted.


## Structure
- ngccm4:
	- common: common files for the algorithms
	- crypto_kem: Key Encapsulation Mechanism schemes
	- crypto_sign: Digital Signature schemes
	- crypto_kex: Key Exchange schemes
	- libopencm3: third-party library for ARM Cortex-M4
	- mk: Makefiles related for building and compiling
	- README.md

## Usage

The preferred interface is the pqm4-style output-stem target. You can build a binary directly by naming the expected output stem:

```bash
make crypto_kem_DKE-128_ref_test
make crypto_kem_DKE-128_ref_speed
make crypto_kem_DKE-128_ref_hashing
```

This is interpreted as:

```text
<family>_<scheme>_<implementation>_<app>
```

For example:

```bash
make crypto_kem_DKE-128_ref_test
```

is parsed as:

- family: `crypto_kem`
- scheme: `DKE-128`
- implementation: `ref`
- app: `test`

The generated files are:

```bash
elf/crypto_kem_DKE-128_ref_test.elf
bin/crypto_kem_DKE-128_ref_test.bin
```

The explicit selector form is still supported when needed:

```bash
make FAMILY=crypto_kem SCHEME=DKE-128 IMPLEMENTATION=ref APP=test -j1
```

## Usage for QEMU

Typical build examples:

```bash
make crypto_kem_DKE-128_ref_test
make crypto_kem_DKE-128_ref_hashing
make PLATFORM=mps2-an386 crypto_kem_DKE-128_ref_speed qemu-run -j1
```

Notes:

- Supported families in the makefile system are `crypto_kem`, `crypto_kex`, and `crypto_sign`.
- The current repository contains KEM implementations. `crypto_kex` and `crypto_sign` are already wired into the discovery/build system, but they do not yet contain implementations in this tree.
- `PLATFORM=nucleo-l4r5zi` is the default hardware build target.
- `PLATFORM=mps2-an386` uses local files under `common/mps2` and runs in QEMU.
- `-j1` means serial build mode. You can increase it, for example `-j4`, once the environment is working.

## Flashing on Hardware

The makefile system currently builds `.elf` and `.bin` files but does not provide a dedicated `flash` target. Use `openocd` to program the generated `.elf` file.

### Default platform: `nucleo-l4r5zi`

Build an application first:

```bash
make crypto_kem_DKE-128_ref_test
```

This generates:

```bash
elf/crypto_kem_DKE-128_ref_test.elf
bin/crypto_kem_DKE-128_ref_test.bin
```

Flash it with the project-local OpenOCD config:

```bash
openocd \
  -f st_nucleo_l4r5.cfg \
  -c "program elf/crypto_kem_DKE-128_ref_test.elf verify reset exit"
```

Notes:

- `nucleo-l4r5zi` is the default `PLATFORM`, so you do not need to pass `PLATFORM=nucleo-l4r5zi` unless you want to be explicit.
- `FAMILY=crypto_kem` is optional here because the current checked-in implementations are under `crypto_kem`.
- This expects the board to be connected through the on-board ST-Link debugger.

### `stm32f4discovery`

Build for the Discovery board:

```bash
make PLATFORM=stm32f4discovery crypto_kem_DKE-128_ref_test
```

This generates:

```bash
elf/crypto_kem_DKE-128_ref_test.elf
bin/crypto_kem_DKE-128_ref_test.bin
```

Flash it with OpenOCD using the standard ST-Link interface and STM32F4 target:

```bash
openocd \
  -f interface/stlink.cfg \
  -f target/stm32f4x.cfg \
  -c "program elf/crypto_kem_DKE-128_ref_test.elf verify reset exit"
```

Notes:

- This command assumes your OpenOCD installation provides `interface/stlink.cfg` and `target/stm32f4x.cfg`.
- If your Discovery board uses a different on-board probe configuration, adjust the interface config accordingly.


## LICENSES
TODO


## TODO list
1. One host-based C implementation building: for testvectors reference
2. One Cortex-M4-based building: ref/m4 implementation validation; Default platform: nucleo-l4r5zi; 
	- QEMU simulation
	- stm32f4discovery
	- Others
3. 
