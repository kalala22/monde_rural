<template>
  <footer>
    <div class="bg-vertrural text-white mt-20">
      <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div
            class="col-span-1 md:col-span-2"
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible="{ opacity: 1, y: 0 }"
          >
            <div class="flex items-center gap-2 mb-4">
              <div class="w-20">
                <img :src="logo" alt="Le Monde Rural Logo" class="w-full h-auto" />
              </div>
            </div>
            <p class="text-lg text-white/80 mb-4 leading-relaxed">
              Organisation engagée pour le développement équitable et durable des zones rurales.
              Ensemble, bâtissons une nation forte, juste et inclusive.
            </p>
            <p class="text-sm font-bold italic text-accent">PLUS UN PAS SANS LES RURAUX.</p>
          </div>

          <div>
            <ul class="space-y-2">
              <li>
                <!-- <Link
                  href="/a-propos"
                  class="text-sm text-white/80 hover:text-accent transition-colors"
                >
                  À propos
                </Link> -->
              </li>
              <li>
                <!-- <Link
                  href="/actualites"
                  class="text-sm text-white/80 hover:text-accent transition-colors"
                >
                  Actualités
                </Link> -->
              </li>
              <li>
                <!-- <Link
                  href="/rejoignez-nous"
                  class="text-sm text-white/80 hover:text-accent transition-colors"
                >
                  Rejoignez-nous
                </Link> -->
              </li>
              <li>
                <!-- <Link
                  href="/contact"
                  class="text-sm text-white/80 hover:text-accent transition-colors"
                >
                  Contact
                </Link> -->
              </li>
            </ul>
          </div>

          <div v-motion :initial="{ opacity: 0, y: 100 }" :visible="{ opacity: 1, y: 0 }">
            <h3 class="font-bold text-lg mb-4">Contact</h3>
            <ul class="space-y-3">
              <li class="flex items-start gap-2 text-sm text-white/80">
                <!-- <Mail class="h-4 w-4 mt-0.5 flex-shrink-0" /> -->
                <a href="mailto:theruralmonde832@gmail.com">theruralmonde832@gmail.com</a>
              </li>
              <li class="flex items-start gap-2 text-sm text-white/80">
                <!-- <Phone class="h-4 w-4 mt-0.5 flex-shrink-0" /> -->
                <span>+243 XXX XXX XXX</span>
              </li>
              <li class="flex items-start gap-2 text-sm text-white/80">
                <!-- <MapPin class="h-4 w-4 mt-0.5 flex-shrink-0" /> -->
                <span>Kinshasa, RD Congo</span>
              </li>
            </ul>

            <div class="flex gap-3 mt-4">
              <a
                href="https://www.facebook.com/profile.php?id=61573814172598&locale=fr_FR%2F"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors"
              >
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/ios-filled/50/facebook-new.png"
                  alt="facebook-new"
                />
              </a>

              <a
                href="https://www.linkedin.com/company/le-monde-rural-asbl/"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors"
              >
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/ios-filled/50/linkedin.png"
                  alt="linkedin"
                />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors"
              >
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/ios-filled/50/instagram.png"
                  alt="instagram"
                />
              </a>
            </div>
          </div>
        </div>

        <div class="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/60">
          <p>&copy; LE MONDE RURAL. Tous droits réservés.</p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import logo from '@/assets/img/Logo/logoMonde.png'
</script>
