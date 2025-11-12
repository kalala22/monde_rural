<script setup lang="ts">
import { useRoute } from 'vue-router'
import Navbar from '@/components/NavbarView.vue'
import FooterView from '@/components/FooterView.vue'

const route = useRoute()
</script>

<template>
  <!-- Affiche la Navbar si la route n'a pas meta.hideLayout -->
  <Navbar v-if="!route.meta.hideLayout" />

  <RouterView />

  <!-- Affiche le FooterView si la route n'a pas meta.hideLayout -->
  <FooterView v-if="!route.meta.hideLayout" />

  <div></div>
</template>
```
