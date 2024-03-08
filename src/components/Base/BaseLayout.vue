<script setup>
import Header from "@/components/Base/Header.vue";
import Footer from "@/components/Base/Footer.vue";
</script>

<template>
  <Header />
  <main id="main">
  <slot />
  </main>
  <Footer />
</template>