<script setup lang="ts">
import { ref } from 'vue'

const listIntervation = ref([
  {
    title: 'Développement Durable',
    description: 'Promouvoir des pratiques durables pour un avenir meilleur',
    icon: 'leaf',
  },
  {
    title: 'Finance Durable',
    description: "Faciliter l'accès aux ressources financières pour les communautés rurales",
    icon: 'coins',
  },
  {
    title: 'Éducation Financière et Numérique',
    description: "Former et accompagner les populations rurales vers l'autonomie",
    icon: 'book-open',
  },
  {
    title: "Sensibilisation à l'Environnement",
    description: 'Protéger notre patrimoine naturel pour les générations futures',
    icon: 'tree-city',
  },
  {
    title: 'Sécurité Alimentaire',
    description: "Garantir l'accès à une alimentation saine et suffisante",
    icon: 'apple-alt',
  },
  {
    title: "Promotion de l'Égalité des Genres",
    description: 'Construire une société inclusive où chacun a sa place',
    icon: 'genderless',
  },
])
</script>
<template>
  <section>
    <div class="md:max-w-7xl mx-auto px-4">
      <!-- 3. text-center : Centre le texte à l'intérieur de ce div. -->
      <div class="text-center mb-16 mt-10" v-motion-slide-visible-once-left>
        <h2 class="font-black text-3xl md:text-5xl mb-4 text-vertrural font-roboto">
          Nos Axes d'Intervention
        </h2>
        <p class="text-lg max-w-2xl mx-auto text-balance font-roboto">
          Nous agissons sur plusieurs fronts pour garantir un développement harmonieux des zones
          rurales
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="item in listIntervation" :key="item.title">
          <div
            class="border border-gray-200 hover:border-vertrural transition-all flex items-center hover:shadow-xl group h-70 rounded-lg overflow-hidden hover:transform hover:scale-105 ease-in-out duration-500"
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible="{ opacity: 1, y: 0 }"
          >
            <div class="p-6">
              <div
                class="w-12 h-12 flex items-center justify-center mb-4 rounded-full bg-vertrural/10 text-vertrural group-hover:bg-vertrural group-hover:text-white transition-colors duration-300"
              >
                <font-awesome-icon :icon="item.icon" class="w-6 h-6" />
              </div>
              <h3 class="font-bold text-xl mb-3 text-balance font-roboto">{{ item.title }}</h3>
              <p class="leading-relaxed font-roboto font-light text-xl">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
