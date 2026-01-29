<template>
  <div class="flex flex-col">
    <div class="w-full h-[1px] bg-core-100 my-6"></div>

    <div class="flex flex-row w-full justify-between items-center">
      <div class="flex flex-row gap-2 font-medium text-4xl">
        <p>{{ role }}</p>
        <p class="text-core-700">{{ where }}</p>
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
