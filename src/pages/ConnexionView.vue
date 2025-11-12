<template>
  <!-- Le template reste identique à la version Tailwind CSS précédente -->
  <div
    class="min-h-screen flex items-center justify-center bg-cover bg-center"
    style="background-image: url('/src/assets/background-hills.jpg')"
  >
    <div class="bg-white bg-opacity-95 p-8 rounded-2xl shadow-2xl w-full max-w-md">
      <div class="flex items-center justify-center mb-6">
        <img :src="logo" alt="Logo Le Monde Rural" class="h-10 w-10 mr-3" />
        <span class="text-2xl font-bold text-gray-800">LE MONDE RURAL</span>
      </div>
      <form @submit.prevent="login">
        <div
          v-if="successMessage"
          class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg relative mb-6 text-left"
          role="alert"
        >
          <strong class="font-bold">Succès !</strong>
          <!-- On affiche directement le message reçu du serveur -->
          <span class="block sm:inline"> {{ successMessage }}</span>
        </div>
        <div
          v-if="errorMessage"
          class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-6 text-left"
          role="alert"
        >
          <strong class="font-bold">Erreur !</strong>
          <!-- On affiche directement le message d'erreur reçu -->
          <span class="block sm:inline"> {{ errorMessage }}</span>
        </div>
        <div class="mb-4">
          <label for="nom" class="block text-gray-700 text-sm font-bold mb-2 text-left"
            >Votre Nom</label
          >
          <input
            type="name"
            id="non"
            v-model="nom"
            placeholder="votre nom"
            required
            class="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div class="mb-6">
          <label for="password" class="block text-gray-700 text-sm font-bold mb-2 text-left"
            >Mot de passe</label
          >
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Votre mot de passe"
            required
            class="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button
          type="submit"
          :disabled="isLoading"
          class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
        >
          <span v-if="isLoading">
            <font-awesome-icon icon="circle-notch" class="animate-spin mr-2" />
            Connexion en cours...
          </span>
          <span v-else class="flex items-center justify-center">Se connecter</span>
        </button>
      </form>
      <div class="text-center mt-6">
        <a
          href="#"
          class="inline-block align-baseline font-bold text-sm text-green-600 hover:text-green-800"
        >
          Mot de passe oublié ?
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from '@/assets/img/Logo/logoMonde.png'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const nom = ref('')
const password = ref('')
const errorMessage = ref('')
const successMessage = ref('')
const isLoading = ref(false)
const router = useRouter()
const login = async () => {
  isLoading.value = true
  errorMessage.value = ''
  successMessage.value = ''
  try {
    const response = await fetch('http://localhost:3000/api/handle-login', {
      method: 'POST', // Changé de 'GET' à 'POST'
      headers: {
        'Content-Type': 'application/json',
      },
      // Envoi de 'email_address' pour correspondre au backend
      body: JSON.stringify({
        nom: nom.value,
        password: password.value,
      }),
    })

    const responseData = await response.json()
    if (!response.ok) {
      errorMessage.value = responseData.message || 'Une erreur inconnue est survenue.'
      throw new Error(responseData.message || 'Server error')
    }

    if (responseData.token) {
      localStorage.setItem('authToken', responseData.token) // Stockage dans le localStorage
    }
    successMessage.value = 'Connexion réussie !'

    setTimeout(() => {
      router.push('/admin/dashboard')
    }, 2000)
  } catch (error) {
    if (!errorMessage.value) {
      errorMessage.value = 'Impossible de se connecter au serveur.'
    }
    console.error('Impossible de se connecter au serveur', error)
  } finally {
    isLoading.value = false
  }
}
</script>
