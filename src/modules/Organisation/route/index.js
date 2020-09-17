import DefaultLayout from '@/layouts/default/Index.vue'
import Listing from '../views/Listing/Index.vue';

const routes = [
    { 
        path: 'organisations/',
        component: DefaultLayout,
        name: 'OrganisationDefaultLayout',
        children: [
          {
            path: 'index/',
            component: Listing,
            name: 'OrganisationListing'
          }
        ]
  
    }

];

export default routes;