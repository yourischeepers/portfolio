<template>
  <div class="rounded-3xl bg-core-900 p-6 flex flex-col justify-between">
    <div class="flex flex-row justify-between w-full items-center">
      <p class="text-4xl font-medium text-core-50">Languages</p>

      <IconWeb class="text-core-50 size-8 rotate-[-15deg]" />
    </div>

    <div class="flex flex-col gap-8">
      <LanguageSkillLevel
          v-for="language in languages"
          :name="language.name"
          :level="language.fluency"
          :progress="language.fluencyPercentage"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import IconWeb from "../../../assets/icons/IconWeb.vue";
import LanguageSkillLevel from "./LanguageSkillLevel.vue";
import {GetLanguages} from "../../../../domain/about/languages/GetLanguages.ts";
import {ref} from "vue";
import type {Language} from "../../../../domain/about/languages/model/Language.ts";

const getLanguages = new GetLanguages()
const languages = ref<Language[]>()

function loadLanguages() {
  languages.value = getLanguages.invoke()
}

loadLanguages()
</script>
