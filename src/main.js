import Vue from 'vue';

import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faGlobeEurope, faGraduationCap, faRandom, faMinus, faPlus, faCheckSquare, faTimesCircle, faExclamationTriangle, faInfoCircle, faUser, faAngleDoubleLeft, faUserTimes, faUtensils, faFlag, faCube } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vuetify from './plugins/vuetify';

library.add(faGlobeEurope, faGraduationCap, faRandom, faMinus, faPlus, faCheckSquare, faTimesCircle, faExclamationTriangle, faInfoCircle, faUser, faAngleDoubleLeft, faUserTimes, faUtensils, faFlag, faCube);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  Vuetify,
  render: h => h(App)
}).$mount('#app');
