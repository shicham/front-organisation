import DefaultLayout from '@/layouts/default/Index.vue'
import Index from '../Index.vue';

const routes = [
    { 
        path: '/theme',
        component: DefaultLayout,
        name: 'themeLayout',
        meta: {
            breadcrumb: this.$t('Theme'),
            title: this.$t('Default')
        },
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