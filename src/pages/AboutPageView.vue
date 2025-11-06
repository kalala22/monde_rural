<script setup lang="ts">
import { ref, type Ref } from 'vue'
const ListCardMission: Ref<
  { title: string; description: string; icon?: string; color?: string }[]
> = ref([
  {
    title: 'Notre Mission',
    description:
      "Promouvoir le développement équitable et durable des zones rurales en renforçant les capacités des communautés locales, en facilitant l'accès aux ressources et en défendant leurs intérêts auprès des décideurs.",
    icon: 'bullseye',
    color: 'text-vertrural',
  },
  {
    title: 'Notre Vision',
    description:
      'Un monde où les populations rurales jouissent pleinement de leurs droits, participent activement au développement national et bénéficient équitablement des fruits de la croissance économique.',
    icon: 'eye',
    color: 'text-blue-rural',
  },
])
</script>

<template>
  <main>
    <section class="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-2">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center mt-10">
          <h1 class="font-black text-4xl md:text-6xl mb-6 text-primary text-balance font-roboto">
            À Propos LE MONDE RURAL
          </h1>
          <p class="text-xl text-muted-foreground text-balance leading-relaxed font-roboto">
            Une organisation engagée pour le développement équitable et durable des zones rurales
          </p>
        </div>
      </div>
    </section>
    <section class="py-16 bg-background">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div
            v-for="(card, index) in ListCardMission"
            :key="index"
            class="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300 border-2 border-vertrural/20"
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible="{ opacity: 1, y: 0 }"
          >
            <div class="flex items-center mb-4">
              <div :class="card.color + ' text-4xl mr-4'">
                <font-awesome-icon :icon="card.icon" />
              </div>
              <h2 :class="card.color + ' text-2xl font-bold  font-roboto'">{{ card.title }}</h2>
            </div>
            <p :class="card.color + ' text-muted-foreground text-balance font-roboto'">
              {{ card.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
