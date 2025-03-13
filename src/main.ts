import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import Particles from "vue3-particles"; // Importation du wrapper Vue 3

createApp(App).use(Particles).mount('#app');
