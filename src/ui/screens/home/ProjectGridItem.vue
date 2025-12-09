<template>
  <RouterLink
      :to="`/project/${project.slug}`"
      :class="{'md:col-span-2': !project.isGridVertical, 'h-[500px]': project.isGridVertical, 'h-[300px]': !project.isGridVertical}"
      class="cursor-pointer rounded-3xl md:h-[500px] bg-core-200 bg-cover md:bg-size-[100%] bg-center hover:bg-size-[105%] transition-all duration-300"
      :style="{backgroundImage: `url('${project.gridImageUrl}')`}"
  />
</template>

<script setup lang="ts">
import type {Project} from "../../../domain/project/model/Project.ts";

interface Props {
  project: Project,
}

defineProps<Props>()
</script>
