<template>
  <div class="w-full h-screen relative flex justify-center items-center pointer-events-none">
    <div class="absolute inset-0 w-full h-full flex">
      <div class="pointer-events-auto w-full h-full bg-core-900" :class="{'reveal': finished}" />
      <div class="pointer-events-auto w-full h-full bg-core-900 animation-delay-100" :class="{'reveal': finished}" />
      <div class="pointer-events-auto w-full h-full bg-core-900 animation-delay-200" :class="{'reveal': finished}" />
      <div class="pointer-events-auto w-full h-full bg-core-900 animation-delay-300" :class="{'reveal': finished}" />
      <div class="pointer-events-auto w-full h-full bg-core-900 animation-delay-400" :class="{'reveal': finished}" />
      <div class="pointer-events-auto w-full h-full bg-core-900 animation-delay-500" :class="{'reveal': finished}" />
    </div>

    <div class="relative font-normal text-5xl text-core-300" :class="{'fade-out': finished}">
      <div class="flex items-center gap-4">
        <p>Loading</p>

        <div class="h-1 w-16 bg-core-300" />

        <p class="w-16">{{ Math.ceil(progress) }}%</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {SyncContent} from "../../../domain/content/SyncContent.ts";
import {GetProjects} from "../../../domain/project/GetProjects.ts";

const emit = defineEmits(["finish"])
const finished = ref(false)
const progress = ref(0)

const syncContent = new SyncContent()
const getProjects = new GetProjects()

async function start() {
  const MIN_DURATION = 1000
  const startTime = performance.now()

  await syncContent.invoke()
  progress.value = 50

  const preloadUrls = getPreloadUrls()
  const progressPerImage = 50 / preloadUrls.length

  const promises = preloadUrls.map((url) =>
      preloadImage(url).then((img) => {
        progress.value += progressPerImage
        return img
      })
  )

  await Promise.all([
      promises,
      waitForMinimumTime(startTime, MIN_DURATION),
  ])

  progress.value = 100
  emit("finish")
  finished.value = true
}

function waitForMinimumTime(startTime: number, minDuration: number) {
  const elapsed = performance.now() - startTime
  const remaining = Math.max(0, minDuration - elapsed)

  return new Promise((resolve) => setTimeout(resolve, remaining))
}

function getPreloadUrls(): string[] {
  return getProjects.invoke().map((it) => {
    return it.gridImageUrl
  })
}

function preloadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });
}

start()
</script>

<style scoped>
@keyframes reveal {
  0% {
    height: 100%;
  }
  100% {
    height: 0;
  }
}

.reveal {
  animation-name: reveal;
  animation-duration: 0.8s;
  animation-timing-function: cubic-bezier(.13,.43,.31,1);
  animation-fill-mode: forwards;
}

@keyframes fade-out {
  0% {
    opacity: 100%;
  }
  100% {
    opacity: 0;
  }
}

.fade-out {
  animation-name: fade-out;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}
</style>
