import Vue from 'vue';

import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faGlobeEurope, faGraduationCap, faRandom, faMinus, faPlus, faCheckSquare, faTimesCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faGlobeEurope, faGraduationCap, faRandom, faMinus, faPlus, faCheckSquare, faTimesCircle, faExclamationTriangle);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
