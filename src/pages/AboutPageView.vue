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

const ListMoyensAction: Ref<
  { title: string; description: string; icon?: string; color?: string }[]
> = ref([
  {
    title: 'Études et Recherches',
    description: 'Analyses approfondies des besoins ruraux',
    icon: 'book-open',
    color: '',
  },
  {
    title: 'Formations',
    description: 'Renforcement des capacités locales',
    icon: 'users',
    color: '',
  },
  {
    title: 'Forums et Conférences',
    description: "Espaces d'échange et de partage",
    icon: 'network-wired',
    color: '',
  },
  {
    title: 'Coaching',
    description: 'Accompagnement personnalisé des acteurs',
    icon: 'bullseye',
    color: '',
  },
])

const ListAppuiFinancier: Ref<
  { title: string; description: string; icon?: string; color?: string }[]
> = ref([
  {
    title: 'Dons',
    description: 'Soutien financier direct aux projets communautaires',
    icon: 'hand-holding-usd',
    color: '',
  },
  {
    title: 'Subventions',
    description: 'Financement de programmes de développement',
    icon: 'donate',
    color: '',
  },
  {
    title: 'Levées de Fonds',
    description: 'Mobilisation de ressources pour les initiatives rurales',
    icon: 'handshake',
    color: '',
  },
])

const ListActivitesPlaidoyer: Ref<
  { title: string; description: string; icon?: string; color?: string }[]
> = ref([
  {
    title: 'Communications',
    description: "Diffusion d'informations et sensibilisation",
    icon: 'bullhorn',
    color: '',
  },
  {
    title: 'Campagnes de Sensibilisation',
    description: 'Mobilisation autour des enjeux ruraux',
    icon: 'network-wired',
    color: '',
  },
  {
    title: 'Plaidoyers Thématiques',
    description: 'Défense des intérêts des communautés rurales',
    icon: 'bullseye',
    color: '',
  },
  {
    title: 'Mise en Réseau',
    description: 'Création de synergies entre acteurs',
    icon: 'users',
    color: '',
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
    <!-- // Mission & Vision Section -->
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
    <!-- // Valeurs Section -->
    <section class="py-16 bg-vertrural/5">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="font-black mb-4 text-3xl md:text-4xl text-vertrural font-roboto">
            Nos Valeurs
          </h2>
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
    <!-- // Moyens d'Action Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="font-black text-3xl md:text-4xl mb-4 text-vertrural font-roboto">
            Nos Moyens d'Action
          </h2>
        </div>
        <div class="max-w-6xl mx-auto space-y-12">
          <div class="">
            <div class="flex items-center gap-3 mb-6">
              <div class="text-vertrural text-3xl">
                <font-awesome-icon icon="book-open" />
              </div>
              <h3 class="text-2xl font-bold text-vertrural font-roboto">Appui Technique</h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div
                v-for="(moyen, index) in ListMoyensAction"
                :key="index"
                class="bg-white rounded-lg shadow-sm p-6 border-1 border-gray-300 hover:border-vertrural transition-shadow duration-300"
                v-motion
                :initial="{ opacity: 0, y: 100 }"
                :visible="{ opacity: 1, y: 0 }"
              >
                <div class="pb-6">
                  <div class="text-blue-rural mb-4 text-xl md:text-2xl">
                    <font-awesome-icon :icon="moyen.icon" />
                  </div>
                  <h3 class="font-bold font-roboto mb-2">
                    {{ moyen.title }}
                  </h3>
                  <p class="text-muted-foreground text-balance font-roboto">
                    {{ moyen.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- // Appui Financier Section -->
          <div>
            <div class="flex items-center gap-3 mb-6">
              <div class="text-blue-rural text-3xl">
                <font-awesome-icon icon="dollar-sign" />
              </div>
              <h3 class="text-2xl font-bold text-blue-rural font-roboto">Appui Financier</h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div
                v-for="(appuis, index) in ListAppuiFinancier"
                :key="index"
                class="bg-white rounded-lg shadow-sm p-6 border-1 border-gray-300 hover:border-blue-rural transition-shadow duration-300"
                v-motion
                :initial="{ opacity: 0, y: 100 }"
                :visible="{ opacity: 1, y: 0 }"
              >
                <div class="pb-6">
                  <div class="text-blue-rural mb-4 text-xl md:text-2xl">
                    <font-awesome-icon :icon="appuis.icon" />
                  </div>
                  <h3 class="font-bold font-roboto mb-2">
                    {{ appuis.title }}
                  </h3>
                  <p class="text-muted-foreground text-balance font-roboto">
                    {{ appuis.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- // plaidoyer Financier Section -->
          <div>
            <div class="flex items-center gap-3 mb-6">
              <div class="text-green-rural text-3xl">
                <font-awesome-icon icon="dollar-sign" />
              </div>
              <h3 class="text-2xl font-bold text-green-rural font-roboto">
                Activités de Plaidoyer
              </h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div
                v-for="(activites, index) in ListActivitesPlaidoyer"
                :key="index"
                class="bg-white rounded-lg shadow-sm p-6 border-1 border-gray-300 hover:border-green-rural transition-shadow duration-300"
                v-motion
                :initial="{ opacity: 0, y: 100 }"
                :visible="{ opacity: 1, y: 0 }"
              >
                <div class="pb-6">
                  <div class="text-green-rural mb-4 text-xl md:text-2xl">
                    <font-awesome-icon :icon="activites.icon" />
                  </div>
                  <h3 class="font-bold font-roboto mb-2">
                    {{ activites.title }}
                  </h3>
                  <p class="text-muted-foreground text-balance font-roboto">
                    {{ activites.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<!-- <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeZZcCMouwMJnnmdQ9Tz6cvrtUEPLmJTy7o5mG3TH8uev0izQ/viewform?embedded=true"
          width="700"
          height="520"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          >Chargement…</iframe
> -->
