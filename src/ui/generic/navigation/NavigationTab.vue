<template>
  <RouterLink
      :to="route"
      class="text-core-50 px-6 py-4 flex gap-0.5 rounded-full cursor-pointer transition-colors"
      :class="{
        'bg-core-950': active,
        'hover:bg-core-900': active,
        'bg-core-100': !active,
        'hover:bg-core-200': !active,
        'text-core-50': active,
        'text-core-950': !active,
      }"
  >
    <p class="text-xl font-medium">{{ name }}</p>
    <p v-if="smallText" class="text-sm font-medium">{{ smallText }}</p>
  </RouterLink>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {ref} from "vue";

interface Props {
  name: string,
  smallText?: string,
  route: string,
}

const props = defineProps<Props>();

const currentRoute = useRoute()
const active = ref(currentRoute.fullPath == props.route)
</script>
