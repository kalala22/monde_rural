<script lang="ts" setup>
import { ref } from 'vue'

const form = ref({
  nom: '',
  postnom: '',
  prenom: '',
  email: '',
  membershipType: '',
  message: '',
})

const isLoading = ref(false)
const error = ref(false)
const success = ref(false)

const submitForm = async () => {
  isLoading.value = true
  error.value = false
  success.value = false

  try {
    const response = await fetch('http://localhost:3000/api/send-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value),
    })
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    if (response.status === 201) {
      success.value = true
      form.value = {
        nom: '',
        postnom: '',
        prenom: '',
        email: '',
        membershipType: '',
        message: '',
      }
    } else {
      throw new Error('Form submission failed')
    }
  } catch (e) {
    error.value = true
    console.error('Form submission error:', e)
  } finally {
    isLoading.value = false
  }
}
</script>
<template>
  <div class="container mx-auto px-4">
    <div class="max-w-2xl mx-auto">
      <div class="border-2 rounded-2xl border-gray-600/20">
        <div class="p-8">
          <div class="text-center mb-8">
            <h2 class="font-black font-roboto text-3xl mb-4 text-vertrural">
              Formulaire d'Adhésion
            </h2>
            <p class="text-muted-foreground font-roboto">
              Remplissez ce formulaire pour nous rejoindre
            </p>
          </div>
          <!-- <div
            v-if="success"
            class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg relative mb-6 text-left"
            role="alert"
          >
            <strong class="font-bold">Message envoyé !</strong>
            <span class="block sm:inline"> Merci, je vous répondrai dès que possible.</span>
          </div> -->

          <!-- Message d'Erreur -->
          <!-- <div
            v-if="error"
            class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-6 text-left"
            role="alert"
          >
            <strong class="font-bold">Erreur !</strong>
            <span class="block sm:inline"> Une erreur est survenue. Veuillez réessayer.</span>
          </div> -->
          <form @submit.prevent="submitForm" class="space-y-6">
            <div>
              <label for="nom" class="block text-sm font-medium text-gray-700 font-roboto"
                >Nom</label
              >
              <input
                type="text"
                id="nom"
                v-model="form.nom"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-vertrural focus:border-vertrural font-roboto"
                placeholder="Ex: John"
                required
              />
            </div>
            <div>
              <label for="Postnom" class="block text-sm font-medium text-gray-700 font-roboto"
                >Postnom</label
              >
              <input
                type="text"
                id="Postnom"
                v-model="form.postnom"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-vertrural focus:border-vertrural font-roboto"
                placeholder="Ex: Doe"
                required
              />
            </div>
            <div>
              <label for="Prenom" class="block text-sm font-medium text-gray-700 font-roboto"
                >Prenom</label
              >
              <input
                type="text"
                id="Prenom"
                v-model="form.prenom"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-vertrural focus:border-vertrural font-roboto"
                placeholder="Ex: Jane"
                required
              />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 font-roboto"
                >Adresse Email</label
              >
              <input
                type="email"
                id="email"
                v-model="form.email"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-vertrural focus:border-vertrural font-roboto"
                placeholder="Votre adresse email"
                required
              />
            </div>
            <div>
              <label
                for="membershipType"
                class="block text-sm font-medium text-gray-700 font-roboto"
                >Type d'Adhésion</label
              >
              <select
                id="membershipType"
                v-model="form.membershipType"
                required
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-vertrural focus:border-vertrural font-roboto"
              >
                <option value="" disabled selected>Choisissez un type</option>
                <option value="membre">Membre</option>
                <option value="bénévole">Bénévole</option>
                <option value="partenaire">Partenaire</option>
              </select>
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 font-roboto"
                >Message (Optionnel)</label
              >
              <textarea
                id="message"
                v-model="form.message"
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
              Je m'engage
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
