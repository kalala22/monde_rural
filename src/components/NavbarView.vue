<script setup lang="ts">
import { ref } from 'vue'
import logo from '@/assets/img/Logo/logoMonde.png'

const links = ref([
  { name: 'Accueil', href: '#' },
  { name: 'A propos', href: '#' },
  { name: 'Actualités', href: '#' },
  { name: 'Rejoignez-nous', href: '#' },
  { name: 'Contact', href: '#' },
])
</script>

<template>
  <header class="sticky top-0 z-50 bg-white shadow-md py-2">
    <nav class="flex items-center justify-between px-6 md:max-w-7xl md:mx-auto md:text-center">
      <div class="flex items-center">
        <div class="">
          <a href="#"><img :src="logo" class="w-20" alt="Logo du monde rural" /></a>
        </div>
        <!-- <div class="flex flex-col">
          <span class="text-vertrural font-roboto font-black">LE MONDE RURAL</span>
        </div> -->
      </div>
      <div class="flex space-x-10">
        <div v-for="link in links" :key="link.name" :class="[]">
          <a :href="link.href" class="font-roboto hover:text-vertrural text-sm">{{ link.name }}</a>
        </div>
      </div>
    </nav>
  </header>
</template>
