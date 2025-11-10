<template>
  <main>
    <section
      class="py-16 md:py-2 relative bg-no-repeat bg-cover bg-center bg-[url(@/assets/img/bgjoinUs.png)] h-80 md:h-80 lg:h-96"
    >
      <div class="container mx-auto px-4">
        <div
          class="mx-auto text-center flex flex-col items-center justify-center bg-linear-to-r from-vertrural/50 to-blue-rural/50 text-white absolute inset-0 opacity-95 h-full md:h-full"
        >
          <h1 class="font-black text-4xl md:text-6xl mb-6 text-primary text-balance font-roboto">
            Rejoignez-nous
          </h1>
          <p class="text-xl text-muted-foreground text-balance leading-relaxed font-roboto">
            Rejoignez-nous pour bâtir ensemble une nation forte, juste et inclusive.
          </p>
          <p
            class="text-xl text-muted-foreground text-balance leading-relaxed font-roboto italic mt-4"
          >
            Ensemble, nous pouvons transformer les zones rurales et assurer un développement
            équitable pour tous.
          </p>
        </div>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="font-black text-3xl md:text-4xl mb-4 text-vertrural font-roboto">
            Comment Participer ?
          </h2>
          <p class="text-lg text-muted-foreground max-w-2xl mx-auto text-balance font-roboto">
            Plusieurs façons de contribuer à notre mission
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <div
            v-for="(type, index) in membershipTypes"
            :key="index"
            class="border-2 border-gray-600/20 hover:border-vertrural transition-all hover:shadow-lg rounded-xl p-6 py-20 font-roboto"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{ opacity: 1, y: 0 }"
            :delay="index * 100"
          >
            <div
              class="mb-4 rounded-full w-15 h-15 flex items-center justify-center bg-vertrural/10"
            >
              <font-awesome-icon :icon="type.icon" class="text-vertrural text-xl" />
            </div>
            <h3 class="font-bold text-xl mb-2 text-vertrural font-roboto">{{ type.title }}</h3>
            <p class="text-muted-foreground mb-4 font-roboto">{{ type.description }}</p>
            <ul class="list-disc list-inside text-muted-foreground font-roboto">
              <li v-for="(benefit, i) in type.benefits" :key="i" class="list-none font-roboto">
                <font-awesome-icon icon="check-circle" class="text-green-rural mr-3" />
                <span>{{ benefit }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="py-16 bg-vertrural/5">
      <form-join-us
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible="{ opacity: 1, y: 0 }"
        :delay="500"
      />
    </section>
  </main>
</template>
<script setup lang="ts">
import { ref, type Ref } from 'vue'
import formJoinUs from '@/components/formJoinUs.vue'

const membershipTypes: Ref<
  { title: string; description: string; icon?: string; benefits: string[] }[]
> = ref([
  {
    icon: 'users',
    title: 'Devenir Membre',
    description:
      'Rejoignez notre communauté et participez activement à nos projets de développement rural',
    benefits: ['Participation aux assemblées', 'Accès aux formations', 'Réseau de solidarité'],
  },
  {
    icon: 'heart',
    title: 'Devenir Bénévole',
    description: 'Offrez votre temps et vos compétences pour soutenir nos actions sur le terrain',
    benefits: ['Expérience enrichissante', 'Impact direct', 'Développement personnel'],
  },
  {
    icon: 'handshake',
    title: 'Devenir Partenaire',
    description: "Collaborez avec nous pour amplifier l'impact de nos initiatives",
    benefits: ['Partenariats stratégiques', 'Visibilité', 'Impact collectif'],
  },
])
</script>
