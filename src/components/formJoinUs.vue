<script lang="ts" setup></script>
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
          <form class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 font-roboto"
                >Nom</label
              >
              <input
                type="text"
                id="name"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-vertrural focus:border-vertrural font-roboto"
                placeholder="Ex: John"
              />
            </div>
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 font-roboto"
                >Postnom</label
              >
              <input
                type="text"
                id="name"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-vertrural focus:border-vertrural font-roboto"
                placeholder="Ex: Doe"
              />
            </div>
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 font-roboto"
                >Prenom</label
              >
              <input
                type="text"
                id="name"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-vertrural focus:border-vertrural font-roboto"
                placeholder="Ex: Jane"
              />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 font-roboto"
                >Adresse Email</label
              >
              <input
                type="email"
                id="email"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-vertrural focus:border-vertrural font-roboto"
                placeholder="Votre adresse email"
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
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-vertrural focus:border-vertrural font-roboto"
              >
                <option value="" disabled selected>Choisissez un type</option>
                <option value="individual">Membre</option>
                <option value="corporate">Bénévole</option>
                <option value="student">Partenaire</option>
              </select>
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
              Je m'engage
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
