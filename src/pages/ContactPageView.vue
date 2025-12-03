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
            Contactez-nous
          </h1>
          <p class="text-xl text-muted-foreground text-balance leading-relaxed font-roboto">
            Nous sommes à votre écoute. N'hésitez pas à nous contacter pour toute question ou
            collaboration.
          </p>
        </div>
      </div>
    </section>
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          <div
            v-for="(info, index) in contactInfo"
            :key="index"
            class="flex flex-col items-center text-center p-6 border-2 border-gray-600/20 rounded-xl hover:border-vertrural transition-all hover:shadow-lg"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{ opacity: 1, y: 0 }"
            :delay="index * 100"
          >
            <div
              class="bg-vertrural text-white w-12 h-12 flex items-center justify-center rounded-full mb-4"
            >
              <font-awesome-icon :icon="info.icon" class="text-lg" />
            </div>
            <h3 class="font-bold text-xl mb-2 text-vertrural font-roboto">{{ info.title }}</h3>
            <p class="text-sm text-muted-foreground mb-4 font-roboto">{{ info.content }}</p>
            <a
              :href="info.lien"
              target="_blank"
              class="text-vertrural font-semibold hover:underline font-roboto"
              >Voir Plus</a
            >
          </div>
        </div>
      </div>
    </section>
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div class="border-2 border-gray-600/20 rounded-xl p-8">
            <h2 class="font-black text-3xl md:text-4xl mb-6 text-vertrural font-roboto">
              Envoyez-nous un message
            </h2>
            <form class="space-y-6">
              <div>
                <label for="nom" class="block text-sm font-medium text-gray-700 font-roboto"
                  >Nom Complet *</label
                >
                <input
                  type="text"
                  id="nom"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-vertrural focus:border-vertrural font-roboto"
                  placeholder="Ex: Chretien Kalala"
                  required
                />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 font-roboto"
                  >Adresse Email *</label
                >
                <input
                  type="email"
                  id="email"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-vertrural focus:border-vertrural font-roboto"
                  placeholder="Votre adresse email"
                  required
                />
              </div>
              <div>
                <label for="sujet" class="block text-sm font-medium text-gray-700 font-roboto"
                  >Sujet *</label
                >
                <input
                  type="text"
                  id="sujet"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-vertrural focus:border-vertrural font-roboto"
                  placeholder="Votre sujet"
                  required
                />
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 font-roboto"
                  >Message (Optionnel)</label
                >
                <textarea
                  id="message"
                  rows="4"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-vertrural focus:border-vertrural font-roboto"
                  placeholder="Votre message"
                ></textarea>
              </div>

              <button
                type="submit"
                size="lg"
                class="w-full bg-vertrural hover:bg-vertrural/90 text-vertrural-foreground font-bold text-lg rounded-lg px-4 py-3 transition-colors font-roboto hover:cursor-pointer text-white"
              >
                <span class="text-center flex items-center justify-center">
                  Envoyer le Message
                  <font-awesome-icon icon="paper-plane" class="ml-2 text-sm" />
                </span>

                <!-- État normal -->
              </button>
            </form>
          </div>
          <div class="space-y-8">
            <div class="overflow-hidden border-2 border-gray-600/20 rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999123456789!2d2.292292615674321!3d48.85837307928744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdf1234567%3A0x123456789abcdef0!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1616161616161!5m2!1sen!2sfr"
                width="100%"
                height="400"
                style="border: 0"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div class="border-2 border-gray-600/20 rounded-xl">
              <div class="p-8">
                <h2 class="font-black text-2xl mb-6 text-vertrural font-roboto">Suivez-nous</h2>
                <p class="text-muted-foreground mb-6 leading-relaxed font-roboto">
                  Restez connectés avec nous sur les réseaux sociaux pour suivre nos actualités et
                  nos actions.
                </p>
                <div class="flex gap-3">
                  <a
                    v-for="(social, index) in socialLinks"
                    :key="index"
                    :href="social.url"
                    target="_blank"
                    class="text-vertrural rounded-lg text-2xl mr-6 hover:text-blue-600 transition-colors"
                  >
                    <font-awesome-icon :icon="['fab', social.icon]" class="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { ref, type Ref } from 'vue'

const contactInfo: Ref<
  {
    icon: string
    title: string
    content: string
    lien: string
  }[]
> = ref([
  {
    icon: 'phone',
    title: 'Téléphone',
    content: '+243 819 800 448',
    lien: 'tel:+33123456789',
  },
  {
    icon: 'envelope',
    title: 'Email',
    content: 'theruralmonde832@gmail.com',
    lien: 'mailto:theruralmonde832@gmail.com',
  },
  {
    icon: 'location-dot',
    title: 'Adresse',
    content: '',
    lien: 'https://goo.gl/maps/example',
  },
])

const socialLinks: Ref<
  {
    icon: string
    url: string
  }[]
> = ref([
  { icon: 'facebook', url: 'https://www.facebook.com/yourpage' },
  { icon: 'x', url: 'https://www.twitter.com/yourprofile' },
  { icon: 'instagram', url: 'https://www.instagram.com/yourprofile' },
])
</script>
