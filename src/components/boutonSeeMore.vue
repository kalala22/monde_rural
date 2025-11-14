<script setup lang="ts">
interface Link {
  name: string
  href: string
}
import { ref } from 'vue'
const links = ref<Link[]>([{ name: 'En savoir plus', href: '#/about' }])
</script>
<template>
  <a
    v-for="link in links"
    :key="link.name"
    :href="link.href"
    class="border-1 shadow-sm flex items-center justify-center transition duration-600 ease-in-out gap-1 hover:bg-vertrural/90 text-white hover:text-white font-bold text-lg px-4 py-2 rounded-lg"
  >
    {{ link.name }}
    <font-awesome-icon icon="" />
  </a>
</template>
