<script setup lang="ts">
import BoutonJoinUs from './boutonJoinUs.vue'
import BoutonSeeMore from './boutonSeeMore.vue'
</script>
<template>
  <main id="home">
    <div
      class="relative flex items-center justify-center bg-no-repeat bg-cover bg-center bg-[url(@/assets/img/bgMondeRuralAgricol.png)] h-screen"
    >
      <!-- Ajout de la surcouche avec opacité -->
      <div class="absolute inset-0 bg-black opacity-40"></div>

      <!-- Assurez-vous que votre contenu est au-dessus de la surcouche -->
      <div class="relative max-w-4xl mx-4 text-center">
        <div
          class="inline-flex items-center gap-2 bg-vertrural/40 px-4 py-2 rounded-full mb-6"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="300"
        >
          <!-- <Leaf class="h-5 w-5 text-vertrural" /> -->
          <font-awesome-icon icon="leaf" class="h-5 w-5 text-white" />
          <span class="text-sm font-bold text-white animate-pulse"
            >Développement Équitable et Durable</span
          >
        </div>
        <div>
          <h1
            class="font-roboto font-bold text-4xl md:text-6xl mb-8 text-balance text-white"
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible="{ opacity: 1, y: 0 }"
            :delay="300"
            :duration="800"
          >
            Souvenez-vous de ces mots puissants tirés de notre hymne national
          </h1>
        </div>
        <blockquote
          class="text-xl md:text-2xl font-bold italic text-white mb-6"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="300"
          :duration="800"
        >
          « Nous peuplerons ton sol et nous assurerons ta grandeur. »
        </blockquote>

        <p
          class="text-lg md:text-xl text-muted-foreground mb-10 text-balance text-white"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="1000"
          :duration="800"
        >
          Car la grandeur d'un pays se mesure à sa capacité à se développer de manière équitable.
        </p>
        <div
          class="flex flex-col md:flex-row gap-4 justify-center"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="200"
          :duration="800"
        >
          <BoutonJoinUs />
          <BoutonSeeMore />
        </div>
      </div>
    </div>
  </main>
</template>
