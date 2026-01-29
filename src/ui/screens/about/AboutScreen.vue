<template>
  <NavigationTabs />

  <div class="w-full relative min-h-screen flex flex-col bg-core-50">
    <Header />

    <AboutMeBento class="horizontal-spacing" />

    <WorkExperienceList class="horizontal-spacing mt-18 mb-6" />

    <TechGrid class="horizontal-spacing mt-18 mb-12" />

    <Footer :minimal="false" />
  </div>
</template>

<script setup lang="ts">
import NavigationTabs from "../../generic/navigation/NavigationTabs.vue";
import Header from "../../generic/header/Header.vue";
import Footer from "../../generic/footer/Footer.vue";
import AboutMeBento from "./AboutMeBento.vue";
import WorkExperienceList from "./experience/WorkExperienceList.vue";
import TechGrid from "./tech/TechGrid.vue";
import {setupSEO} from "../../util/seo.ts";

setupSEO(
    "About me",
    "Youri Scheepers is an Android & Kotlin Multiplatform developer. He also develops websites from time to time",
    "./images/seo-image.png"
)
</script>
