<template>
  <div class="rounded-3xl border-[1px] border-core-200 p-6 flex flex-col justify-between gap-3">
    <p class="font-medium text-2xl">{{ name }}</p>

    <div class="flex flex-row gap-1 flex-wrap">
      <p v-for="item in items" class="bg-core-100 rounded-full px-5 py-3 font-medium text-md">
        {{ item }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts" >
interface Props {
  name: string,
  items: string[],
}

defineProps<Props>()
</script>
