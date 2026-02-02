<template>
  <div class="flex flex-col">
    <div class="w-full h-[1px] bg-core-200 my-6"></div>

    <div class="flex flex-row w-full justify-between items-center">
      <div class="flex flex-row gap-2 font-medium text-4xl text-core-700/70 items-center">
        <p class="text-core-950">{{ role }}</p>
        <p>{{ where }}</p>
        <slot />
      </div>

      <p class="font-medium text-2xl text-core-700">{{ start }} — {{ end ? end : "Present" }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  role: string,
  where: string,
  start: string,
  end?: string,
}

defineProps<Props>()
</script>
