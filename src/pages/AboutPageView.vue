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

const ListValeurs: Ref<{ title: string; description: string; icon?: string; color?: string }[]> =
  ref([
    {
      title: 'Équité',
      description: "Garantir l'égalité des chances pour tous",
      icon: 'balance-scale',
      color: 'text-green-rural',
    },
    {
      title: 'Durabilité',
      description: "Préserver nos ressources pour l'avenir",
      icon: 'bullseye',
      color: 'text-vertrural',
    },
    {
      title: 'Inclusion',
      description: 'Valoriser chaque membre de la communauté',
      icon: 'users',
      color: 'text-blue-rural',
    },
    {
      title: 'Solidarité',
      description: 'Agir ensemble pour un impact collectif',
      icon: 'award',
      color: 'text-yellow-rural',
    },
  ])
</script>

<template>
  <main>
    <section
      class="py-16 md:py-2 relative bg-no-repeat bg-cover bg-center bg-[url(@/assets/img/womengriculture.png)] h-80 md:h-80 lg:h-96"
    >
      <div class="container mx-auto px-4">
        <div
          class="mx-auto text-center flex flex-col items-center justify-center bg-linear-to-r from-vertrural/50 to-blue-rural/50 text-white absolute inset-0 opacity-95 h-full md:h-full"
        >
          <h1 class="font-black text-4xl md:text-6xl mb-6 text-primary text-balance font-roboto">
            À Propos de nous
          </h1>
          <p class="text-xl text-muted-foreground text-balance leading-relaxed font-roboto">
            Découvrez notre mission, notre vision et nos valeurs
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

    <section class="py-16 bg-accent/5">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="font-black mb-4 text-3xl md:text-4xl text-primary font-roboto">Nos Valeurs</h2>
          <p class="text-lg text-muted-foreground text-balance max-w-2xl mx-auto font-roboto">
            Les principes qui guident notre action au quotidien
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div
            v-for="(valeur, index) in ListValeurs"
            :key="index"
            class="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-300 border-1 border-vertrural/10"
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible="{ opacity: 1, y: 0 }"
          >
            <div class="flex items-center mb-4 flex-col justify-center">
              <div :class="valeur.color + ' text-4xl mb-2'">
                <font-awesome-icon :icon="valeur.icon" />
              </div>
              <h3 :class="valeur.color + ' text-xl font-bold font-roboto'">{{ valeur.title }}</h3>
            </div>
            <p class="font-medium text-balance font-roboto">
              {{ valeur.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
