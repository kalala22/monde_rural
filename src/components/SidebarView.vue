<template>
  <!-- Le template reste identique à la version Tailwind CSS précédente -->
  <aside class="w-64 bg-green-800 text-white flex flex-col min-h-screen p-4">
    <div class="flex items-center mb-8">
      <img :src="logo" alt="Logo" class="h-8 w-8 mr-2" />
      <span class="text-xl font-semibold">LE MONDE RURAL</span>
    </div>
    <nav class="flex-1">
      <ul>
        <li>
          <a href="#" class="flex items-center px-3 py-2 rounded-md bg-green-900 font-bold">
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
          </a>
        </li>
        <li class="mt-2">
          <a
            href="#"
            class="flex items-center px-3 py-2 rounded-md hover:bg-green-700 transition-colors duration-200"
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
          </a>
        </li>
        <li class="mt-2">
          <a
            href="#"
            class="flex items-center px-3 py-2 rounded-md hover:bg-green-700 transition-colors duration-200"
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
          </a>
        </li>
      </ul>
    </nav>
    <div class="mt-auto">
      <a
        href="#"
        @click.prevent=""
        class="flex items-center px-3 py-2 rounded-md hover:bg-green-700 transition-colors duration-200"
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
      </a>
    </div>
  </aside>
</template>

<script setup lang="ts">
import logo from '@/assets/img/Logo/logoMonde_white.png'
// Fonction de déconnexion
// const logout = () => {
//   localStorage.removeItem('isLoggedIn');
//   // Recharge la page pour retourner à l'écran de connexion
//   window.location.reload();
// };
</script>
