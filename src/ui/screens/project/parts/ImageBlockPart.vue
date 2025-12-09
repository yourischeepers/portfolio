<template>
  <div class="flex flex-col gap-2 items-center w-full">
    <div
        class="w-full aspect-[1.8] rounded-3xl bg-cover"
        :style="{backgroundImage: `url('${imageBlock.imageUrl}')`}"
    />

    <p class="text-core-400 font-normal text-md max-w-[700px] pb-12">
      {{ imageBlock.description }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type {ImageBlock} from "../../../../contentful/model/items/ImageBlock.ts";

interface Props {
  imageBlock: ImageBlock;
}

defineProps<Props>()
</script>
