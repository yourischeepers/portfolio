<template>
  <div class="size-6 overflow-hidden">
    <div ref="container" class="w-6 h-[26px]"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import lottie from 'lottie-web'
import animationData from './kmp.json'

const container = ref(null)
let animation = null

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
