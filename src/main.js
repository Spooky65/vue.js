import Vue from 'vue' //librairie "vue" dans node_modules
import app from './app.vue' //fichier app.vue local
import accueil from './accueil.vue'
import modifier from './modifier.vue'
import ajouter from './ajouter.vue'
import detail from './detail.vue'
import MovieItemComponent from './components/movieitem.vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(VueRouter);

Vue.component('movie-item', MovieItemComponent)

const routes = [
  { path: '/', component: accueil },
  { path: '/modifier', component: modifier },
  { path: '/ajouter', component: ajouter },
  { path: '/detail/:id', component: detail }
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(app)
})

window.shared_data = {
    movies : [
      {
        id: 1,
          title: "L'étrange noël de M. Jack",
          year: 1994,
          synopsys: "Jack Skellington, un épouvantail squelettique surnommé « le Roi des citrouilles » (Pumpkin King en version originale), vit dans la ville d'Halloween. En tant que maître de l'épouvante, Jack occupe ses journées à préparer la prochaine fête d'Halloween."
      },
      {
        id: 2,
          title: "Interstellar",
          year: 2014,
          synopsys: "Alors que la Terre se meurt, une équipe d'astronautes franchit un trou de ver apparu près de Saturne conduisant à une autre galaxie, cela dans le but d'explorer un nouveau système stellaire et l'espoir de trouver une nouvelle planète habitable par l'humanité afin de la sauver."
      }
  ]
}