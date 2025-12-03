<script lang="ts" setup>
import { ref } from 'vue'
const GOOGLE_SCRIPT_URL_ENV = import.meta.env.VITE_GOOGLE_SCRIPT_URL as string

// Petite sécurité : vérifier dans la console si l'URL est bien chargée
if (!GOOGLE_SCRIPT_URL_ENV) {
  console.error("ERREUR CRITIQUE : L'URL de l'API Google est manquante dans le fichier .env")
}

// VOTRE URL GOOGLE SCRIPT ICI (celle qui finit par /exec)
const GOOGLE_SCRIPT_URL = GOOGLE_SCRIPT_URL_ENV

const form = ref({
  nom: '',
  postnom: '',
  prenom: '',
  telephone: '',
  email: '',
  membershipType: '',
  message: '',
})

const isLoading = ref(false)
// Remplacer les booléens par des chaînes de caractères (ou null)
const successMessage = ref('')
const errorMessage = ref('')

const submitForm = async () => {
  isLoading.value = true
  successMessage.value = ''
  errorMessage.value = ''

  try {
    // 1. Conversion des données en FormData (Format compatible Google Script)
    const formData = new FormData()
    formData.append('nom', form.value.nom)
    formData.append('postnom', form.value.postnom)
    formData.append('prenom', form.value.prenom)
    formData.append('telephone', form.value.telephone)
    formData.append('email', form.value.email)
    formData.append('membershipType', form.value.membershipType)
    formData.append('message', form.value.message)

    // 2. Envoi via fetch
    // Note: On ne met PAS de header 'Content-Type': 'application/json'
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: formData,
    })

    // ÉTAPE CLÉ : Lire le corps de la réponse JSON, que ce soit un succès ou une erreur
    const responseData = await response.json()

    if (responseData.result === 'success') {
      successMessage.value = responseData.message // "Inscription réussie !"

      // Réinitialiser le formulaire
      form.value = {
        nom: '',
        postnom: '',
        prenom: '',
        telephone: '',
        email: '',
        membershipType: '',
        message: '',
      }
    } else {
      // C'est ici qu'on attrape le message "Email déjà utilisé"
      throw new Error(responseData.message || 'Une erreur est survenue.')
    }
  } catch (e: unknown) {
    if (!errorMessage.value) {
      errorMessage.value = e as string
    }
    console.error('Form submission error:', e)
  } finally {
    isLoading.value = false
  }
}
</script>
<template>
  <section>
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
            <div
              v-if="successMessage"
              class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg relative mb-6 text-left"
              role="alert"
            >
              <strong class="font-bold">Succès !</strong>
              <!-- On affiche directement le message reçu du serveur -->
              <span class="block sm:inline"> {{ successMessage }}</span>
            </div>

            <!-- Message d'Erreur DYNAMIQUE -->
            <div
              v-if="errorMessage"
              class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-6 text-left"
              role="alert"
            >
              <strong class="font-bold">Erreur !</strong>
              <!-- On affiche directement le message reçu du serveur -->
              <span class="block sm:inline"> {{ errorMessage }}</span>
            </div>
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
                <label for="telephone" class="block text-sm font-medium text-gray-700 font-roboto"
                  >Telephone</label
                >
                <input
                  type="text"
                  id="telephone"
                  v-model="form.telephone"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-vertrural focus:border-vertrural font-roboto"
                  placeholder="Votre numero de telephone"
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
                  <option value="benevole">Bénévole</option>
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
              <!-- <div
              v-if="successMessage"
              class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg relative mb-6 text-left"
              role="alert"
            >
              <strong class="font-bold">Message envoyé !</strong>
              <span class="block sm:inline"> Merci </span>
            </div> -->

              <!-- Message d'Erreur -->
              <!-- <div
              v-if="errorMessage"
              class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-6 text-left"
              role="alert"
            >
              <strong class="font-bold">Erreur !</strong>
              <span class="block sm:inline"> {{ errorMessage }}</span>
            </div> -->
              <button
                type="submit"
                size="lg"
                :disabled="isLoading"
                class="w-full bg-vertrural hover:bg-vertrural/90 text-vertrural-foreground font-bold text-lg rounded-lg px-4 py-3 transition-colors font-roboto hover:cursor-pointer text-white"
              >
                <span v-if="isLoading" class="">
                  <font-awesome-icon icon="circle-notch" class="animate-spin mr-2" />
                  Envoi en cours...
                </span>

                <!-- État normal -->
                <span v-else class="flex items-center justify-center"> Je m'engage </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
