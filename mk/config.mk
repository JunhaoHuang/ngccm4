SUPPORTED_PLATFORMS := nucleo-l4r5zi stm32f4discovery mps2-an386
SUPPORTED_FAMILIES := crypto_kem crypto_kex crypto_sign
PLATFORM ?= nucleo-l4r5zi
PLATFORM_STATE := .build-platform

ifeq ($(filter $(PLATFORM),$(SUPPORTED_PLATFORMS)),)
$(error Unsupported PLATFORM '$(PLATFORM)'; supported platforms: $(SUPPORTED_PLATFORMS))
endif

FAMILY ?=

ifneq ($(strip $(FAMILY)),)
ifeq ($(filter $(FAMILY),$(SUPPORTED_FAMILIES)),)
$(error Unsupported FAMILY '$(FAMILY)'; supported families: $(SUPPORTED_FAMILIES))
endif
endif

SCHEME ?=
IMPLEMENTATION ?=
APP ?=

Q ?=
OPT ?= speed
LTO ?= 0
NGCC_ITERATIONS ?= 30
USE_SM3_ASM ?= 0

CROSS_PREFIX ?= arm-none-eabi
CC := $(CROSS_PREFIX)-gcc
CPP := $(CROSS_PREFIX)-cpp
AR := $(CROSS_PREFIX)-gcc-ar
LD := $(CC)
OBJCOPY := $(CROSS_PREFIX)-objcopy
SIZE := $(CROSS_PREFIX)-size

CPPFLAGS += -I$(CURDIR)
CPPFLAGS += -DNGCC_ITERATIONS=$(NGCC_ITERATIONS)
CFLAGS += -ffunction-sections -fdata-sections -fomit-frame-pointer -g3
LDFLAGS += -Wl,--gc-sections

ifeq ($(USE_SM3_ASM),1)
CPPFLAGS += -DSM3_ASM
else ifneq ($(USE_SM3_ASM),0)
$(error Unsupported USE_SM3_ASM '$(USE_SM3_ASM)'; use 0 or 1)
endif

ifeq ($(OPT),size)
CFLAGS += -Os
else ifeq ($(OPT),debug)
CFLAGS += -Og
else ifeq ($(OPT),speed)
CFLAGS += -O3
else
$(error Unsupported OPT '$(OPT)'; use speed, size, or debug)
endif

ifeq ($(LTO),1)
CFLAGS += -flto
LDFLAGS += -flto
endif

COMMON_LIB_SRCS := \
	common/auxfunc.c \
	common/auxfunc.h \
	common/drng.c \
	common/drng.h \
	common/sm3_bit_compress_asm.S \
	common/hal.h \
	common/sendfn.h

ENTRY_kem := KEM_AlgorithmInstance.c
ENTRY_kex := KEX_AlgorithmInstance.c
ENTRY_sign := SIGN_AlgorithmInstance.c

APP_SRCS_kem := $(sort $(wildcard crypto_kem/*.c))
APP_SRCS_kex := $(sort $(wildcard crypto_kex/*.c))
APP_SRCS_sign := $(sort $(wildcard crypto_sign/*.c))

APPS_kem := $(basename $(notdir $(APP_SRCS_kem)))
APPS_kex := $(basename $(notdir $(APP_SRCS_kex)))
APPS_sign := $(basename $(notdir $(APP_SRCS_sign)))

SUPPORTED_APPS := $(sort $(APPS_kem) $(APPS_kex) $(APPS_sign))

PLATFORM_LIB_SRCS ?=
PLATFORM_INCLUDE_DIRS ?=
QEMU ?= qemu-system-arm
QEMUFLAGS ?=
