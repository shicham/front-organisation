<template>
<div class="card card-bordered">
  <div class="card-aside-wrap">
    
    <div class="card-aside card-aside-left user-aside toggle-slide toggle-slide-left toggle-break-lg toggle-screen-lg">
      <div class="card-inner-group">
        <div class="card-inner">
          <div class="user-card">
            <div class="user-avatar bg-primary">
              <span>{{ organisation.name | substrin(2) }}</span>
            </div>
            <div class="user-info">
              <span class="lead-text">{{organisation.name}}</span>
              <span class="sub-text">{{organisation.typeLabel}}</span>
            </div>
            
          </div>
        </div>
        <div class="card-inner">
          <div class="app-account-info py-0">
            <h6 class="overline-title-alt">{{$t('i18n.InternalCode')}} : {{organisation.internalCode}} </h6>  
            <div class="user-balance-sub" v-if="organisation.address">{{organisation.address.address.housenumber}} {{organisation.address.address.street}} <span>{{organisation.address.address.city}} <span class="currency currency-btc"></span>{{organisation.address.address.postcode}}</span>
            </div>
          </div>
        </div>
        
        <div class="card-inner p-0">
          <ul class="link-list-menu">
            <li>
              <router-link :to="{ name: 'OrganisationView', params: { organisationId: organisation.id, component: 'Information' } }">
                <em class="icon ni ni-user-fill-c"></em><span>{{$t('i18n.Information')}}</span>
              </router-link>
            </li>
            <li >
              <router-link :to="{ name: 'OrganisationView', params: { organisationId: organisation.id, component: 'Employee' } }">
                <em class="icon ni ni-user-fill-c"></em><span>{{$t('i18n.Employee')}}</span>
              </router-link>
            </li>
            <li>
              <a href="/demo3/user-profile-regular.html">
                <em class="icon ni ni-user-fill-c"></em><span>{{$t('i18n.Roles')}}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <component v-bind:is="componentFile"></component> 

    
    
  </div>
</div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: 'ViewForm',
  components: {
    
  },
  data() {
    return {
      
    }
  },
  props: {
    
  },
  computed: {
   ...mapGetters({organisation: 'organisation/result'}),
   componentFile() {
      return this.importComponent(this.$route.params.component)
    }
  },
  created() {
    this.$store.dispatch("organisation/load", this.$route.params.organisationId);
  },
  methods: {
    importComponent(path) {
      return () => import(`./${path}.vue`)
    }
  }
}
</script>