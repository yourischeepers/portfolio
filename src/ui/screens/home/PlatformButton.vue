<template>
  <div
      class="group flex items-center gap-1.5 pl-5 pr-6 py-4 border-2 border-core-100 rounded-full transition-colors"
      :class="{ 'bg-core-900 border-core-900 text-core-50': selected }"
  >
    <slot />

    <p class="font-medium text-lg">{{ name }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string,
  selected: boolean,
}

defineProps<Props>();
</script>
