<template>
  <div class="w-6 h-5 mb-1 overflow-hidden">
    <div ref="container" class="size-6"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import lottie from 'lottie-web'
import animationData from './android.json'

const container = ref()
let animation: any = null

onMounted(() => {
  animation = lottie.loadAnimation({
    container: container.value,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData
  })
})

onBeforeUnmount(() => {
  if (animation) animation.destroy()
})
</script>
