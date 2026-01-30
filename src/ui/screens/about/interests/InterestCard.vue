<template>
  <div
      class="rounded-xl bg-cover bg-center absolute drop-shadow-lg hover:z-[60] transition-all hover:scale-110 hover:drop-shadow-2xl hover:rotate-6"
      :style="{
        width: `${width}px`,
        height: `${height}px`,
        transform: `rotate(${rotation}deg)`,
        backgroundImage: `url(${image})`,
        top: `${y}%`,
        left: `${x}%`,
      }"
  />
</template>

<script setup lang="ts">
interface Props {
  image: string,
  width: number,
  height: number,
  x: number,
  y: number,
  rotation: number,
}

defineProps<Props>()
</script>
