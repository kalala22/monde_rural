import './assets/main.css'

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
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

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
)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
