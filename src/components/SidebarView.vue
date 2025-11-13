<template>
  <!-- Le template reste identique à la version Tailwind CSS précédente -->
  <aside class="w-64 bg-vertrural text-white flex flex-col min-h-screen p-4 font-roboto">
    <div class="flex items-center mb-8">
      <img :src="logo" alt="Logo" class="h-8 w-8 mr-2" />
      <span class="text-xl font-semibold">LE MONDE RURAL</span>
    </div>
    <nav class="flex-1">
      <ul>
        <li>
          <span
            class="flex items-center px-3 py-2 rounded-md bg-green-rural font-bold hover:cursor-pointer"
          >
            <svg
              class="w-6 h-6 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              ></path>
            </svg>
            Tableau de bord
          </span>
        </li>
        <li class="mt-2">
          <span
            class="flex items-center px-3 py-2 rounded-md hover:bg-green-rural transition-colors duration-200 hover:cursor-pointer"
          >
            <svg
              class="w-6 h-6 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            Liste des utilisateurs
          </span>
        </li>
        <li class="mt-2">
          <span
            class="flex items-center px-3 py-2 rounded-md hover:bg-green-rural transition-colors duration-200 hover:cursor-pointer"
          >
            <svg
              class="w-6 h-6 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
            Statistiques
          </span>
        </li>
      </ul>
    </nav>
    <div class="mt-auto">
      <button
        @click.prevent="logout"
        class="flex items-center px-3 py-2 rounded-md hover:bg-green-rural transition-colors duration-200 hover:cursor-pointer"
      >
        <svg
          class="w-6 h-6 mr-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          ></path>
        </svg>
        Déconnexion
      </button>
    </div>
  </aside>
</template>

<script setup lang="ts">
import logo from '@/assets/img/Logo/logoMonde_white.png'
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
  // 1. Supprimer le token du localStorage
  localStorage.removeItem('authToken')

  // 2. (Optionnel) Afficher un message à l'utilisateur
  console.log('Vous avez été déconnecté.')

  // 3. Rediriger l'utilisateur vers la page de connexion
  router.push('/admin') // Assurez-vous que '/login' est la route de votre page de connexion
}
</script>
