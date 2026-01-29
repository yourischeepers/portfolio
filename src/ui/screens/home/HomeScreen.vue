<template>
  <NavigationTabs />

  <div class="w-full relative min-h-screen flex flex-col bg-core-50">
    <Header />

    <div class="flex flex-col gap-5 w-full mt-24 z-10 horizontal-spacing">
      <div class="w-full grid grid-cols-1 gap-5 mb-16 jump-up animation-duration-900 md:grid-cols-3">
        <ProjectGridItem v-for="project in projects" :project="project" />
      </div>
    </div>

    <Footer :minimal="false" />
  </div>
</template>

<style scoped>

</style>
<script setup lang="ts">
import {ref} from "vue";
import Footer from "../../generic/footer/Footer.vue";
import {GetProjects} from "../../../domain/project/GetProjects.ts";
import ProjectGridItem from "./ProjectGridItem.vue";
import NavigationTabs from "../../generic/navigation/NavigationTabs.vue";
import Header from "../../generic/header/Header.vue";

const getProjects = new GetProjects()

const projects = ref(getProjects.invoke())
</script>
