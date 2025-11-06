import './assets/main.css'
import { MotionPlugin } from '@vueuse/motion'

import { createApp } from 'vue'

import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faX,
  faBars,
  faTimes,
  faEnvelope,
  faDownload,
  faCode,
  faServer,
  faPalette,
  faCamera,
  faImage,
  faTasks,
  faArrowUpRightFromSquare,
  faSquareArrowUpRight,
  faArrowRight,
  faLeaf,
  faCoins,
  faAppleAlt,
  faBookOpen,
  faGenderless,
  faTreeCity,
  faHeart,
  faBullseye,
  faEye,
} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(
  faX,
  faBars,
  faTimes,
  faEnvelope,
  faGithub,
  faDownload,
  faCode,
  faEnvelope,
  faServer,
  faPalette,
  faCamera,
  faImage,
  faTasks,
  faArrowUpRightFromSquare,
  faSquareArrowUpRight,
  faArrowRight,
  faLeaf,
  faCoins,
  faBookOpen,
  faTreeCity,
  faAppleAlt,
  faGenderless,
  faHeart,
  faFacebook,
  faBullseye,
  faEye,
)
import router from '@/router'

createApp(App)
  .use(MotionPlugin)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .mount('#app')
