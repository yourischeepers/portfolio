<template>
  <div class="w-full h-screen flex justify-center items-center pointer-events-none">
    <div class="absolute inset-0 w-full h-full flex">
      <div class="pointer-events-auto ease-[cubic-bezier(.13,.43,.31,1)] w-full h-full origin-top scale-y-0 bg-core-900 transition-transform duration-[600ms]" :class="{'scale-y-100': isBackgroundVisible}" />
      <div class="pointer-events-auto ease-[cubic-bezier(.13,.43,.31,1)] w-full h-full origin-top scale-y-0 bg-core-900 transition-transform duration-[600ms] delay-50" :class="{'scale-y-100': isBackgroundVisible}" />
      <div class="pointer-events-auto ease-[cubic-bezier(.13,.43,.31,1)] w-full h-full origin-top scale-y-0 bg-core-900 transition-transform duration-[600ms] delay-100" :class="{'scale-y-100': isBackgroundVisible}" />
      <div class="pointer-events-auto ease-[cubic-bezier(.13,.43,.31,1)] w-full h-full origin-top scale-y-0 bg-core-900 transition-transform duration-[600ms] delay-150" :class="{'scale-y-100': isBackgroundVisible}" />
      <div class="pointer-events-auto ease-[cubic-bezier(.13,.43,.31,1)] w-full h-full origin-top scale-y-0 bg-core-900 transition-transform duration-[600ms] delay-200" :class="{'scale-y-100': isBackgroundVisible}" />
      <div class="pointer-events-auto ease-[cubic-bezier(.13,.43,.31,1)] w-full h-full origin-top scale-y-0 bg-core-900 transition-transform duration-[600ms] delay-250" :class="{'scale-y-100': isBackgroundVisible}" />
    </div>

    <div class="relative font-normal text-5xl text-core-300 opacity-0 transition-opacity duration-500" :class="{'opacity-100': isTextVisible}">
      <div class="flex items-center gap-4 -translate-y-18 transition-transform duration-800 ease-in-out" :class="{ 'translate-y-0': isBackgroundVisible }">
        <IconArrowRight class="size-12" />
        <p>{{ screenName }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IconArrowRight from "../assets/icons/IconArrowRight.vue";

const isBackgroundVisible = ref(false)
const isTextVisible = ref(false)
const screenName = ref("Loading")

function show() {
  isBackgroundVisible.value = true
  setTimeout(() => {
    isTextVisible.value = true
  }, 300)
  return new Promise<void>(resolve => { resolve() })
}

function hide() {
  isBackgroundVisible.value = false
  isTextVisible.value = false
  return new Promise<void>(resolve => { resolve() })
}

function setScreenName(name: string) {
  screenName.value = name
}

defineExpose({ show, hide, setScreenName })
</script>
