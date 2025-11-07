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
                <a href="tel:+243819800448">+243 819 800 448</a>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="#ffffff"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    style="mix-blend-mode: normal"
                  >
                    <g transform="scale(5.12,5.12)">
                      <path
                        d="M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/le-monde-rural-asbl/"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="#ffffff"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    style="mix-blend-mode: normal"
                  >
                    <g transform="scale(5.12,5.12)">
                      <path
                        d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/lemonderuralasbl/?utm_source=qr&igsh=bHE4ZGw3MHZvNjJw#"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="#ffffff"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    style="mix-blend-mode: normal"
                  >
                    <g transform="scale(8.53333,8.53333)">
                      <path
                        d="M9.99805,3c-3.859,0 -6.99805,3.14195 -6.99805,7.00195v10c0,3.859 3.14195,6.99805 7.00195,6.99805h10c3.859,0 6.99805,-3.14195 6.99805,-7.00195v-10c0,-3.859 -3.14195,-6.99805 -7.00195,-6.99805zM22,7c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1zM15,9c3.309,0 6,2.691 6,6c0,3.309 -2.691,6 -6,6c-3.309,0 -6,-2.691 -6,-6c0,-3.309 2.691,-6 6,-6zM15,11c-2.20914,0 -4,1.79086 -4,4c0,2.20914 1.79086,4 4,4c2.20914,0 4,-1.79086 4,-4c0,-2.20914 -1.79086,-4 -4,-4z"
                      ></path>
                    </g>
                  </g>
                </svg>
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
import logo from '@/assets/img/Logo/logoMonde_white.png'
</script>
