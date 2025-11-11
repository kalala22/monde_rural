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
// Remplacer les booléens par des chaînes de caractères (ou null)
const successMessage = ref('')
const errorMessage = ref('')

const submitForm = async () => {
  isLoading.value = true
  successMessage.value = ''
  errorMessage.value = ''

  try {
    const response = await fetch('http://localhost:3000/api/send-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value),
    })

    // ÉTAPE CLÉ : Lire le corps de la réponse JSON, que ce soit un succès ou une erreur
    const responseData = await response.json()

    // Si la requête a échoué (status 4xx ou 5xx)
    if (!response.ok) {
      // L'erreur vient du serveur, on utilise son message
      // responseData.message correspond à ce que vous envoyez depuis Express
      // Ex: "Cette adresse email est déjà utilisée."
      errorMessage.value = responseData.message || 'Une erreur inconnue est survenue.'
      throw new Error(responseData.message || 'Server error')
    }

    // Si la requête a réussi (status 201)
    successMessage.value = responseData.message // Ex: "Formulaire envoyé avec succès !"
    // Vider le formulaire
    form.value = {
      nom: '',
      postnom: '',
      prenom: '',
      email: '',
      membershipType: '',
      message: '',
    }
  } catch (e) {
    // Cette partie 'catch' n'attrapera que les erreurs réseau
    // (serveur injoignable, pas de connexion internet, etc.)
    // Si errorMessage n'a pas déjà été défini par la réponse du serveur
    if (!errorMessage.value) {
      errorMessage.value = 'Impossible de joindre le serveur. Veuillez vérifier votre connexion.'
    }
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
</template>
