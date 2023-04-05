import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PhotosView from '../views/PhotosView.vue';
import ContactView from '../views/ContactView.vue';
import ProductView from '../views/ProductView.vue';
import DetailsView from '../views/DetailsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomeView
  },
  { path : '/photos',
    component: PhotosView
    
   
  },
  { 
    path: '/contact',
     component: ContactView
     
    
   },

   { 
    path: '/product',
   component: ProductView
   },

   {
    path:'/detail/:id',
    component: DetailsView
   },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
