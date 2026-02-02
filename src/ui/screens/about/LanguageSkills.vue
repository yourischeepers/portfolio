<template>
  <div class="rounded-3xl bg-core-900 p-6 flex flex-col justify-between">
    <div class="flex flex-row justify-between w-full items-center">
      <p class="text-4xl font-medium text-core-50">Languages</p>

      <IconWeb class="text-core-50 size-8 rotate-[-15deg]" />
    </div>

    <div class="flex flex-col gap-8">
      <LanguageSkillLevel name="Dutch" level="Native" :progress="100" />
      <LanguageSkillLevel name="English" level="Fluent" :progress="95" />
      <LanguageSkillLevel name="German" level="High school level" :progress="30" />
      <LanguageSkillLevel name="Chinese" level="Learning" :progress="10" />
    </div>
  </div>
</template>

<script setup lang="ts">
import IconWeb from "../../assets/icons/IconWeb.vue";
import LanguageSkillLevel from "./LanguageSkillLevel.vue";
</script>
