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

      <div class="flex gap-6 w-full mt-6 mb-12">
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
              View live
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

      <div v-for="bodyPart in project?.bodyParts" class="flex justify-center w-full mt-8 jump-up animation-duration-900">
        <TextBlockPart v-if="bodyPart instanceof TextBlock" :text-block="bodyPart" />
        <ImageBlockPart v-if="bodyPart instanceof ImageBlock" :image-block="bodyPart" />
      </div>
    </div>

    <div class="w-full bg-core-900 flex flex-col items-center pt-16">
      <p class="text-core-400 text-md font-normal w-full text-center">
        Next project
      </p>

      <RouterLink
          :to="`/project/${nextProject?.slug}`"
          class="group border-b-[1px] border-core-800 w-full max-w-[600px] px-20 relative flex flex-col items-center overflow-y-clip"
      >
        <div class="absolute top-0 flex flex-col items-center">
          <h4 class="group-hover:opacity-50 transition-opacity text-core-50 text-9xl font-semibold text-nowrap duration-500">
            {{ nextProject?.name }}
          </h4>
        </div>

        <div
            class="w-full bg-core-700 overflow-hidden aspect-[1.46] translate-y-[80%] group-hover:translate-y-12 transition-all duration-500"
        >
          <div
            class="w-full h-full bg-cover opacity-100 group-hover:opacity-100 transition-opacity duration-500"
            :style="{backgroundImage: `url('${nextProject?.coverImageUrl}')`}"
           />
        </div>
      </RouterLink>

      <RouterLink to="/" class="rounded-full p-4 px-6 bg-core-700 text-core-50 text-xl font-normal mt-12 gap-1 flex transition-colors hover:bg-core-800">
        View all projects
        <p class="text-sm">({{ amountOfProjects }})</p>
      </RouterLink>
    </div>

    <Footer :minimal="true" />
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
import Footer from "../../generic/footer/Footer.vue";
import {GetNextProject} from "../../../domain/project/GetNextProject.ts";
import IconHome from "../../assets/icons/IconHome.vue";
import {GetProjects} from "../../../domain/project/GetProjects.ts";
import TextBlockPart from "./parts/TextBlockPart.vue";
import {TextBlock} from "../../../contentful/model/items/TextBlock.ts";
import ImageBlockPart from "./parts/ImageBlockPart.vue";
import {ImageBlock} from "../../../contentful/model/items/ImageBlock.ts";

const getProjectBySlug = new GetProjectBySlug()
const getNextProject = new GetNextProject()
const getProjects = new GetProjects()

const route = useRoute()
const router = useRouter()

const project = ref<Project>()
const nextProject = ref<Project>()
const amountOfProjects = ref(0)

function loadProject() {
  const slug = route.params.slug ? route.params.slug as string : ""
  const loadedProject = getProjectBySlug.invoke(slug)

  if (loadedProject) {
    project.value = loadedProject
    nextProject.value = getNextProject.invoke(loadedProject)
    amountOfProjects.value = getProjects.invoke().length
  } else {
    router.push("/")
  }
}

loadProject()
</script>
