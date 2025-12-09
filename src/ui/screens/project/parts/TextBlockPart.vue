<template>
  <p class="text-core-300 font-normal text-md max-w-[700px] w-full pb-4">
    {{ textBlock.content }}
  </p>
</template>

<script setup lang="ts">
import type {TextBlock} from "../../../../contentful/model/items/TextBlock.ts";

interface Props {
  textBlock: TextBlock;
}

defineProps<Props>()
</script>
