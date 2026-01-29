<template>
  <NavigationTabs />

  <div class="w-full relative min-h-screen flex flex-col bg-core-50">
    <Header />

    <Footer :minimal="false" />
  </div>
</template>

<script setup lang="ts">
import NavigationTabs from "../../generic/navigation/NavigationTabs.vue";
import Header from "../../generic/header/Header.vue";
import Footer from "../../generic/footer/Footer.vue";
</script>
