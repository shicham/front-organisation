import DefaultLayout from '@/layouts/default/Index.vue'
import Index from '../Index.vue';

const routes = [
    { 
        path: '/theme',
        component: DefaultLayout,
        name: 'themeLayout',
        children: [
          {
            path: '/default',
            component: Index,
            name: 'theme'
          }
        ]
  
    }

];

export default routes;