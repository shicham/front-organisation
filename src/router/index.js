import Vue from 'vue';

import Organisation from '../modules/Organisation/route';
import Theme from '../modules/theme/default/route';

import Router from 'vue-router';


Vue.use(Router)

var allRoutes = []
allRoutes = allRoutes.concat( Organisation,Theme)

const routes = allRoutes

export default new Router({
  routes,
  mode: 'hash'
})