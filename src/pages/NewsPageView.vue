<template>
  <section
    class="py-16 md:py-2 relative bg-no-repeat bg-cover bg-center bg-[url(@/assets/img/bgjoinUs.png)] h-80 md:h-80 lg:h-96"
  >
    <div class="container mx-auto px-4">
      <div
        class="mx-auto text-center flex flex-col items-center justify-center bg-linear-to-r from-vertrural/50 to-blue-rural/50 text-white absolute inset-0 opacity-95 h-full md:h-full"
      >
        <h1 class="font-black text-4xl md:text-6xl mb-6 text-primary text-balance font-roboto">
          Actualités & Projets
        </h1>
        <p class="text-xl text-muted-foreground text-balance leading-relaxed font-roboto">
          Découvrez nos dernières actions et initiatives pour le développement rural
        </p>
        <!-- <p
          class="text-xl text-muted-foreground text-balance leading-relaxed font-roboto italic mt-4"
        >
          Ensemble, nous pouvons transformer les zones rurales et assurer un développement équitable
          pour tous.
        </p> -->
      </div>
    </div>
  </section>
  <section>
    <div class="container mx-auto px-4 py-12">
      <div class="text-center mb-12">
        <h2 class="font-black text-3xl md:text-4xl mb-4 text-vertrural font-roboto">
          Nos Projets Récents
        </h2>
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto text-balance font-roboto">
          Découvrez les initiatives que nous avons entreprises pour améliorer les conditions de vie
          dans les zones rurales.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div
          v-for="(projet, index) in ListProjets"
          :key="index"
          class="border-2 border-gray-600/20 relative hover:border-vertrural transition-all hover:shadow-lg rounded-xl overflow-hidden"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="index * 100"
        >
          <img :src="projet.imageUrl" :alt="projet.title" class="w-full h-48 object-cover" />
          <div class="absolute top-4 right-1 w-22 h-5 bg-vertrural/80 rounded-2xl">
            <div class="flex items-center justify-center h-full">
              <span class="text-white text-sm font-roboto">{{ projet.statut }}</span>
            </div>
          </div>
          <div class="p-6 flex-grow">
            <font-awesome-icon
              :icon="projet.icon"
              class="text-vertrural text-sm"
            ></font-awesome-icon>
            <h3 class="font-bold text-xl mb-2 text-vertrural font-roboto">{{ projet.title }}</h3>
            <p class="text-sm text-muted-foreground mb-4 font-roboto">
              <font-awesome-icon icon="calendar" /> {{ projet.date }}
            </p>
            <p
              class="text-muted-foreground font-roboto transition-all duration-300"
              :class="{ 'line-clamp-6': !projet.expanded }"
            >
              {{ projet.description }}
            </p>
          </div>
          <div class="p-6 flex-grow">
            <button
              @click="projet.expanded = !projet.expanded"
              class="bg-vertrural text-white px-6 py-2 rounded-full font-roboto hover:bg-vertrural/80 transition-all"
            >
              {{ projet.expanded ? 'Réduire' : 'En savoir plus' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref, type Ref } from 'vue'
const ListProjets: Ref<
  Array<{
    statut: string
    icon: string
    imageUrl: string
    type: string
    title: string
    date: string
    description: string
    expanded: boolean
  }>
> = ref([
  {
    statut: 'Terminé',
    type: 'Projet Éducatif',
    title: 'RDC 2050 et Jeunesse Rurale',
    icon: 'users',
    imageUrl: 'src/assets/img/imageForum2.jpg',
    date: '2025-06-25',
    expanded: false,
    description:
      'Le forum RDC 2050 a mis en lumière le rôle central de la jeunesse, particulièrement rurale, dans la transformation durable du pays. Malgré leur poids démographique, les jeunes font face à de nombreux défis : manque d’éducation, chômage, faible accès aux services et exode massif.La proposition principale : réviser la politique nationale de la jeunesse et créer une Stratégie Nationale Intégrée pour la Jeunesse Villageoise, afin d’inclure les jeunes ruraux au cœur du développement durable.',
  },
  {
    statut: 'Terminé',
    type: 'Forum',
    title: 'Conférence Nationale sur l’Exode Rural',
    icon: 'users',
    imageUrl: 'src/assets/img/imageForum2.jpg',
    date: '2025-11-04',
    expanded: false,
    description:
      'Le forum a réuni experts, ONG et institutions publiques pour analyser l’exode rural et le sous-développement du monde rural congolais. Les échanges ont souligné la pauvreté structurelle, le manque d’accès à l’eau, à l’électricité, aux routes et aux services sociaux, poussant les jeunes vers les villes. Les programmes nationaux comme le PADER et le Programme des 145 Territoires visent à soutenir les petits producteurs et améliorer les infrastructures. Les intervenants recommandent une transformation de l’agriculture, une mini-industrialisation locale, des investissements prioritaires dans l’énergie et les routes, ainsi que la promotion des coopératives et du tourisme rural.',
  },
])
</script>
