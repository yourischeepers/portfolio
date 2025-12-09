<template>
  <div class="flex flex-col w-full min-h-screen relative bg-core-950">
    <div
        class="absolute inset-0 w-full aspect-[2.15] bg-cover blur-3xl opacity-30"
        :style="{backgroundImage: `url('${project?.coverImageUrl}')`}"
     />

    <div class="absolute inset-0 pointer-events-none h-screen">
      <!-- Vertical lines -->
      <div class="absolute left-20 top-0 h-full w-px bg-linear-to-b from-core-800 via-core-800 to-core-800/0 md:left-16"></div>
      <div class="absolute left-[50%] top-0 h-full w-px bg-linear-to-b from-core-800 via-core-800 to-core-800/0"></div>
      <div class="absolute right-20 top-0 h-full w-px bg-linear-to-b from-core-800 via-core-800 to-core-800/0 md:right-16"></div>

      <!-- Horizontal lines -->
      <div ref="horizontalLine" class="absolute top-20 left-0 w-full h-px bg-core-800"></div>
      <div ref="horizontalLine" class="absolute top-[410px] left-0 w-full h-px bg-core-800"></div>
    </div>

    <div class="flex flex-col px-20 pt-3 z-10">
      <div class="flex w-full justify-end">
        <RouterLink
            to="/"
            class="cursor-pointer rounded-full bg-core-900 p-4 text-core-50 hover:bg-core-800 transition-colors"
        >
          <IconClose />
        </RouterLink>
      </div>

      <div class="flex gap-6 w-full mt-6">
        <div
            class="flex-1 rounded-3xl bg-cover aspect-[1.46] jump-up animation-duration-600"
            :style="{backgroundImage: `url('${project?.coverImageUrl}')`}"
        />

        <div class="flex-1 flex flex-col jump-up animation-duration-700">
          <h1 class="text-core-50 font-bold text-5xl mb-5">{{ project?.name }}</h1>

          <p class="text-core-400 font-medium text-md mb-1">Completed <span class="text-core-50">{{ project?.completedYear }}</span></p>
          <p class="text-core-400 font-medium text-md mb-1">Developed for <span class="text-core-50">{{ project?.developedFor }}</span></p>
          <p class="text-core-400 font-medium text-md mb-5">Platforms <span class="text-core-50">{{ project?.platforms.join(", ") }}</span></p>
          <p class="text-core-400 font-medium text-md mb-1">Roles <span class="text-core-50">{{ project?.roles.join(", ") }}</span></p>
          <p class="text-core-400 font-medium text-md mb-1">Languages <span class="text-core-50">{{ project?.languages.join(", ") }}</span></p>
          <p class="text-core-400 font-medium text-md mb-1">Other tech <span class="text-core-50">{{ project?.otherTech.join(", ") }}</span></p>

          <div class="flex gap-2 mt-16 jump-up animation-duration-800">
            <a
                v-if="project?.deploymentUrl"
                :href="project?.deploymentUrl"
                class="flex gap-2 items-center bg-core-50 text-core-950 p-4 pr-6 rounded-full text-xl font-medium"
            >
              <AnimatedGlobe />
              Open
            </a>

            <a
                v-if="project?.sourceCodeUrl"
                :href="project?.sourceCodeUrl"
                class="flex gap-2 items-center bg-core-900 text-core-50 p-4 pr-6 rounded-full text-xl font-medium"
            >
              <IconGitHub />
              View source code
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import {GetProjectBySlug} from "../../../domain/project/GetProjectBySlug.ts";
import {ref} from "vue";
import IconClose from "../../assets/icons/IconClose.vue";
import type {Project} from "../../../domain/project/model/Project.ts";
import AnimatedGlobe from "../../assets/animations/AnimatedGlobe.vue";
import IconGitHub from "../../assets/icons/IconGitHub.vue";

const getProjectBySlug = new GetProjectBySlug()
const route = useRoute()
const router = useRouter()

const project = ref<Project>()

function loadProject() {
  const slug = route.params.slug ? route.params.slug as string : ""
  const loadedProject = getProjectBySlug.invoke(slug)

  if (loadedProject) {
    project.value = loadedProject
  } else {
    router.push("/")
  }
}

loadProject()
</script>
