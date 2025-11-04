<script setup lang="ts">
import BoutonJoinUs from './boutonJoinUs.vue'
import BoutonSeeMore from './boutonSeeMore.vue'
</script>
<template>
  <main id="home">
    <div
      class="relative flex items-center justify-center bg-no-repeat bg-cover bg-center bg-[url(src/assets/img/bgMondeRuralAgricol.png)] h-screen"
    >
      <!-- Ajout de la surcouche avec opacité -->
      <div class="absolute inset-0 bg-white opacity-40"></div>

      <!-- Assurez-vous que votre contenu est au-dessus de la surcouche -->
      <div class="relative max-w-4xl mx-4 text-center">
        <div class="inline-flex items-center gap-2 bg-vertrural/10 px-4 py-2 rounded-full mb-6">
          <!-- <Leaf class="h-5 w-5 text-vertrural" /> -->
          <font-awesome-icon icon="leaf" class="h-5 w-5 text-vertrural" />
          <span class="text-sm font-bold text-vertrural">Développement Équitable et Durable</span>
        </div>
        <div>
          <h1
            class="font-roboto font-bold text-4xl md:text-6xl mb-8 text-balance"
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible="{ opacity: 1, y: 0 }"
          >
            Souvenez-vous de ces mots puissants tirés de notre hymne national
          </h1>
        </div>
        <blockquote
          class="text-xl md:text-2xl font-bold italic text-secondary mb-6"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visible="{ opacity: 1, y: 0 }"
        >
          « Nous peuplerons ton sol et nous assurerons ta grandeur. »
        </blockquote>

        <p
          class="text-lg md:text-xl text-muted-foreground mb-10 text-balance"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visible="{ opacity: 1, y: 0 }"
        >
          Car la grandeur d'un pays se mesure à sa capacité à se développer de manière équitable.
        </p>
        <div
          class="flex flex-col md:flex-row gap-4 justify-center"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visible="{ opacity: 1, y: 0 }"
        >
          <BoutonJoinUs />
          <BoutonSeeMore />
        </div>
      </div>
    </div>
  </main>
</template>
