#!/bin/bash
# usage: auto_run.sh {family} {scheme} speed/test/testvectors/stack {impl}

path=${1}_${2}_${4}

logf=Out/${3}_${path}.txt
echo ${path}
# make clean
rm -rf bin/
rm -rf elf/
make ${path}_${3} PLATFORM=nucleo-l4r5zi USE_SM3_ASM=1 USE_KECCAK=1 NGCC_ITERATIONS=100 -j1 
echo === $logf ===
openocd -f st_nucleo_l4r5.cfg -c "program elf/${path}_${3}.elf verify reset exit"
python3 hostside/host_unidirectional.py > $logf & py_pid=$!

echo "[INFO] listening... (pid=$py_pid)"

interrupted=0
trap 'interrupted=1' INT

# testing # in logf
while true; do
	if [ "$interrupted" -eq 1 ]; then
		echo "[INFO] Ctrl+C detected, stopping listener"
		kill "$py_pid" 2>/dev/null
		wait "$py_pid" 2>/dev/null
		exit
	fi
	if grep -q '#' "$logf"; then
		echo "[INFO] '#' detected in $logf, stopping listener"
		kill "$py_pid" 2>/dev/null
		wait "$py_pid" 2>/dev/null
		break
	fi
	sleep 0.05
done