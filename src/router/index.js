import Vue from 'vue';
import User from '../modules/User/route';
import Organisation from '../modules/Organisation/route';
import tehem from '../modules/theme/default/route';

import Router from 'vue-router';


Vue.use(Router)

var allRoutes = []
allRoutes = allRoutes.concat( User,Organisation,tehem)

const routes = allRoutes

export default new Router({
  routes,
  mode: 'hash'
})