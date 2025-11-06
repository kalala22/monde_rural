<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import Navbar from '@/components/NavbarView.vue'
import FooterView from '@/components/FooterView.vue'
// import AboutPageView from './pages/AboutPageView.vue'
</script>

<template>
  <Navbar />
  <RouterView />
  <FooterView />
  <div></div>
</template>
