<script lang="ts" setup></script>
<template>
  <section
    id="slogan-section"
    class="relative flex items-center justify-center bg-no-repeat bg-cover bg-center bg-[url(src/assets/img/fondplusunpassansleruraux.png)] h-80 md:h-80 lg:h-96 mt-35"
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :visible="{ opacity: 1, y: 0 }"
  >
    <div
      class="flex flex-col items-center justify-center bg-linear-to-r from-vertrural to-vertrural text-white absolute inset-0 opacity-85 h-full md:h-full"
    >
      <div
        class="max-w-4xl mx-auto px-4 text-center"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :visible="{ opacity: 1, y: 0 }"
      >
        <h2 class="font-black text-3xl md:text-6xl mb-6 text-balance font-roboto">
          PLUS UN PAS SANS LES RURAUX.
        </h2>
        <p class="text-xl md:text-2xl mb-10 text-white/90 text-balance leading-relaxed font-roboto">
          Ensemble, bâtissons une nation forte, juste et inclusive où chaque voix compte et chaque
          action transforme des vies.
        </p>
      </div>
    </div>
  </section>
</template>
