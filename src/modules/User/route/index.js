import DefaultLayout from '@/layouts/default/Index.vue'
import Listing from '../views/Listing/Index.vue';

const routes = [
{ 
        path: '/',
        component: DefaultLayout
  
    },
    { 
        path: '/users',
        component: DefaultLayout,
        name: 'UserDefaultLayout',
        children: [
          {
            path: '/index',
            component: Listing,
            name: 'UserListing'
          }
        ]
  
    }

];

export default routes;