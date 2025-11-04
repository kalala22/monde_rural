<script setup lang="ts">
interface Link {
  name: string
  href: string
  icon?: string
}
import { ref } from 'vue'
const links = ref<Link[]>([{ name: "Je m'engage", href: '#', icon: 'arrow-right' }])
</script>
<template>
  <a
    v-for="link in links"
    :key="link.name"
    :href="link.href"
    class="bg-blue-rural shadow-sm flex items-center justify-center transition duration-600 ease-in-out gap-1 font-bold text-lg px-4 py-2 rounded-lg hover:scale-105 text-white"
  >
    {{ link.name }}
    <font-awesome-icon :icon="link.icon" />
  </a>
</template>
