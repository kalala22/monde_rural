<script setup lang="ts">
import { ref } from 'vue'
import logo from '@/assets/img/Logo/logoMonde.png'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const links = ref([
  { name: 'Accueil', href: '/' },
  { name: 'A propos', href: '/about' },
  { name: 'Actualités', href: '/news' },
  { name: 'Rejoignez-nous', href: '/join' },
  { name: 'Contact', href: '/contact' },
])
</script>

<template>
  <header class="sticky top-0 z-50 bg-white shadow-md py-2">
    <nav
      class="flex items-center justify-between px-6 md:max-w-7xl md:mx-auto md:text-center"
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :visible="{ opacity: 1, y: 0 }"
    >
      <div class="flex items-center">
        <div class="w-20">
          <a href="#"><img :src="logo" class="" alt="Logo du monde rural" /></a>
        </div>
        <!-- <div class="flex flex-col">
          <span class="text-vertrural font-roboto font-black">LE MONDE RURAL</span>
        </div> -->
      </div>
      <div class="hidden md:flex items-center space-x-8">
        <div v-for="link in links" :key="link.name" :class="[]">
          <router-link :to="link.href" class="font-roboto hover:text-vertrural text-lg">{{
            link.name
          }}</router-link>
        </div>
      </div>

      <div class="md:hidden flex flex-row-reverse gap-5 items-center">
        <button @click="toggleMenu" class="neutral focus:outline-none">
          <div class="text-3xl">
            <!-- Icône Hamburger -->
            <font-awesome-icon :icon="isMenuOpen ? 'x' : 'bars'" />
          </div>
        </button>
        <div class="flex items-center">
          <label class="toggle text-base-content">
            <!-- Le checkbox invisible qui gère l'état -->
            <!-- <input type="checkbox" :checked="theme === 'dark'" @change="toggleTheme" /> -->
            <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </g>
            </svg>

            <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </g>
            </svg>
          </label>
        </div>
      </div>
    </nav>

    <div
      v-if="isMenuOpen"
      class="md:hidden bg-white fixed top-16 left-0 w-full h-[calc(100%-40px)] flex flex-col items-center justify-center gap-5"
    >
      <div v-for="link in links" :key="link.name" class="text-3xl font-bold">
        <!-- Cliquer sur un lien ferme aussi le menu -->
        <!-- <div class="absolute top-4 right-4">
            <button @click="toggleMenu" class="text-primary focus:outline-none">
              <font-awesome-icon icon="x" />
            </button>
          </div> -->
        <router-link :to="link.href" class="text-3xl font-bold" @click="toggleMenu">
          {{ link.name }}
        </router-link>
      </div>
    </div>
  </header>
</template>
