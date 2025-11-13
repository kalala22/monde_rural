<script lang="ts" setup>
import BoutonAgament from './boutonAgament.vue'
</script>
<template>
  <section
    id="slogan-section"
    class="relative flex items-center justify-center bg-no-repeat bg-cover bg-center bg-[url(@/assets/img/fondplusunpassansleruraux.png)] h-80 md:h-80 lg:h-96 mt-35"
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :visible="{ opacity: 1, y: 0 }"
    :delay="500"
    :duration="400"
  >
    <div
      class="flex flex-col items-center justify-center bg-linear-to-r from-vertrural to-blue-rural text-white absolute inset-0 opacity-95 h-full md:h-full"
    >
      <div
        class="max-w-4xl mx-auto px-4 text-center"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :visible="{ opacity: 1, y: 0 }"
        :delay="500"
        :duration="400"
      >
        <h2 class="font-black text-3xl md:text-6xl mb-6 text-balance font-roboto">
          PLUS UN PAS SANS LES RURAUX.
        </h2>
        <p class="text-xl md:text-2xl mb-10 text-white/90 text-balance leading-relaxed font-roboto">
          Ensemble, bâtissons une nation forte, juste et inclusive où chaque voix compte et chaque
          action transforme des vies.
        </p>
        <div class="flex flex-row md:flex-row gap-4 justify-center">
          <bouton-agament />
        </div>
      </div>
    </div>
  </section>
</template>
