<template>
  <div class="fixed z-50 top-0 right-0 flex gap-1 pt-6 pr-24">
    <NavigationTab
        :route="HOME_FULL_PATH"
        name="Work"
        :small-text="`(${projectCount})`"
    />

    <NavigationTab
        :route="ABOUT_FULL_PATH"
        name="About"
    />
  </div>
</template>

<script setup lang="ts">
import {GetProjects} from "../../../domain/project/GetProjects.ts";
import {ref} from "vue";
import NavigationTab from "./NavigationTab.vue";

const getProjects = new GetProjects()

const projectCount = ref(getProjects.invoke().length)

const HOME_FULL_PATH = "/"
const ABOUT_FULL_PATH = "/about"
</script>
