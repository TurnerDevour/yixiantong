import Vue from 'vue';
import Router from 'vue-router';

import Index from '@/pages/Index.vue';
import List from '@/pages/List.vue';
import Detail from '@/pages/Detail.vue';
import City from '@/pages/City.vue';
import Search from '@/pages/Search.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/List',
      name: 'List',
      component: List
    },
    {
      path: '/City',
      name: 'City',
      component: City
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    }
  ]
})
