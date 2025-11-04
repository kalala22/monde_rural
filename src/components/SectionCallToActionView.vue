<script setup lang="ts"></script>
<template>
  <section class="py-20" v-motion :initial="{ opacity: 0, y: 100 }" :visible="{ opacity: 1, y: 0 }">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="font-black text-3xl md:text-4xl font-roboto mb-6 text-balance">
          Prêt à faire la différence ?
        </h2>
        <p class="text-lg text-muted-foreground mb-8 text-balance leading-relaxed font-roboto">
          Rejoignez notre communauté et participez activement au développement durable des zones
          rurales.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button>
            <a
              href="#"
              class="bg-vertrural shadow-sm flex items-center justify-center transition duration-600 ease-in-out gap-1 font-bold text-lg px-6 py-3 rounded-lg hover:scale-105 text-white font-roboto"
            >
              Devenir membre
            </a>
          </button>
          <button>
            <a
              href="#"
              class="shadow-sm flex items-center justify-center transition duration-600 ease-in-out gap-1 hover:bg-green-rural text-black hover:text-white font-bold text-lg px-6 py-3 rounded-lg font-roboto"
            >
              Nous contacter
            </a>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
