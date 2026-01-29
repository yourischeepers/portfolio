<template>
  <div class="flex flex-col gap-2">
    <div class="flex flex-row w-full justify-between">
      <p class="text-xl font-medium text-core-50">{{ name }}</p>
      <p class="text-md font-medium text-core-200">{{ level }}</p>
    </div>

    <div class="rounded-2xl w-full h-2 bg-core-800">
      <div
        class="rounded-2xl h-2 bg-core-50"
        :style="{ width: `${progress}%` }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string,
  level: string,
  progress: number,
}

defineProps<Props>()
</script>
