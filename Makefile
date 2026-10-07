.DEFAULT_GOAL := all

.PHONY: all clean help libclean list list-skipped schemes qemu-run platform-sync

include mk/config.mk
include mk/$(PLATFORM).mk
include mk/scheme.mk

SHORT_TARGETS := $(ELFS:elf/%.elf=%)
REQUESTED_SHORT_TARGETS := $(filter $(SHORT_TARGETS),$(MAKECMDGOALS))
REQUESTED_ELFS := $(addprefix elf/,$(addsuffix .elf,$(REQUESTED_SHORT_TARGETS)))
QEMU_ELFS := $(if $(REQUESTED_ELFS),$(REQUESTED_ELFS),$(ELFS))

.PHONY: $(SHORT_TARGETS)

# platform-sync may wipe bin/ elf/ obj/ when the build configuration changed,
# so the real targets are built by a recursive make that runs after the sync
# (otherwise make would consider a stale, already-existing ELF up to date).
all: platform-sync
	$(Q)$(MAKE) --no-print-directory $(BINS)

$(SHORT_TARGETS): %: platform-sync
	$(Q)$(MAKE) --no-print-directory bin/$*.bin

platform-sync:
	@prev=''; \
	current='PLATFORM=$(PLATFORM) OPT=$(OPT) LTO=$(LTO) NGCC_ITERATIONS=$(NGCC_ITERATIONS) USE_SM3_ASM=$(USE_SM3_ASM) USE_KECCAK=$(USE_KECCAK) DKEX_SIG_MLDSA_LEVEL=$(DKEX_SIG_MLDSA_LEVEL)'; \
	if [ -f $(PLATFORM_STATE) ]; then \
		prev=$$(cat $(PLATFORM_STATE)); \
	fi; \
	if [ "$$prev" != "" ] && [ "$$prev" != "$$current" ]; then \
		printf '  CLEAN   build config changed: %s -> %s\n' "$$prev" "$$current"; \
		rm -rf bin elf obj; \
	fi; \
	printf '%s\n' "$$current" > $(PLATFORM_STATE)

list schemes:
	@printf '%s\n' $(SCHEMES)

list-skipped:
	@printf '%s\n' $(SKIPPED_IMPLS)

help:
	@printf 'Usage: make [all|<output-stem>] [PLATFORM=<platform>] [FAMILY=<family>] [SCHEME=<scheme>] [IMPLEMENTATION=<impl>] [APP=<name>]\n'
	@printf 'Example shorthand target: make crypto_kem_DKEM-128_ref_test\n'
	@printf 'Supported platforms: %s\n' "$(SUPPORTED_PLATFORMS)"
	@printf 'Skip list: mk/skip.mk (SKIP_SCHEMES, SKIP_IMPLS); SKIP="name family/scheme/impl ..." adds, NOSKIP=1 ignores it, make list-skipped shows it (%s skipped now)\n' "$(words $(SKIPPED_IMPLS))"
	@printf 'Supported families: %s\n' "$(SUPPORTED_FAMILIES)"
	@printf 'Available implementations:\n'
	@printf '  %s\n' $(SCHEMES)
	@printf 'Available apps: %s\n' "$(SUPPORTED_APPS)"

# When shorthand targets are given on the same command line, qemu-run waits
# for them (they run their own recursive make) instead of building concurrently.
qemu-run: platform-sync $(REQUESTED_SHORT_TARGETS)
	@if [ "$(PLATFORM)" != "mps2-an386" ]; then \
		printf 'qemu-run is only supported for PLATFORM=mps2-an386\n' >&2; \
		exit 1; \
	fi
	@if [ "$(words $(QEMU_ELFS))" != "1" ]; then \
		printf 'qemu-run requires exactly one target; use a shorthand target or FAMILY=..., SCHEME=..., IMPLEMENTATION=..., and APP=...\n' >&2; \
		exit 1; \
	fi
	$(Q)$(if $(REQUESTED_SHORT_TARGETS),:,$(MAKE) --no-print-directory $(QEMU_ELFS))
	$(Q)$(QEMU) $(QEMUFLAGS) -kernel $(firstword $(QEMU_ELFS))

clean: libclean
	rm -rf bin elf obj $(PLATFORM_STATE)

.SECONDARY:
