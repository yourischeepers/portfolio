<template>
  <div ref="container" class="size-6 rounded-full overflow-hidden tilting"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import lottie from 'lottie-web'
import animationData from './globe.json'

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

<style scoped>
@keyframes tilting {
  0% {
    transform: rotateZ(-20deg);
  }

  100% {
    transform: rotateZ(20deg);
  }
}

.tilting {
  transform-origin: center;
  animation: tilting;
  animation-timing-function: ease-in-out;
  animation-duration: 3000ms;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
</style>
