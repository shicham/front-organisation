import DefaultLayout from '@/layouts/default/Index.vue'
import Listing from '../views/Listing/Index.vue';
import ViewForm from '../views/View/ViewForm.vue';


const routes = [
    { 
        path: '/organisations/',
        component: DefaultLayout,
        name: 'OrganisationDefaultLayout',
        children: [
          {
            path: '/index/',
            component: Listing,
            name: 'OrganisationListing'
          },
          {
            path: '/view/:organisationId',
            component: ViewForm,
            name: 'OrganisationView'
          }
        ]
  
    }

];

export default routes;