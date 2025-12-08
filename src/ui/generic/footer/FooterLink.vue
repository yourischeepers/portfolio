<template>
  <a :href="url" class="group px-4 py-2 text-core-400 font-normal text-xl relative">
    <div class="opacity-0 absolute -top-1 left-[50%] size-1.5 rounded-full bg-core-400 transition-opacity group-hover:opacity-100" />
    <slot />
  </a>
</template>

<script setup lang="ts">
interface Props {
  url: string;
}

defineProps<Props>()
</script>
