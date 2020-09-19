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
              <a class="active" href="/demo3/user-profile-regular.html">
                <em class="icon ni ni-user-fill-c"></em><span>{{$t('i18n.Infomation')}}</span>
              </a>
            </li>
            <li>
              <a href="/demo3/user-profile-regular.html">
                <em class="icon ni ni-user-fill-c"></em><span>{{$t('i18n.Employee')}}</span>
              </a>
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
import Information from './Information';

export default {
  name: 'ViewForm',
  components: {
    Information
  },
  data() {
    return {
      componentName: 'Information'
    }
  },
  computed: {
   ...mapGetters({organisation: 'organisation/result'})
  },
  created() {
    this.$store.dispatch("organisation/load", this.$route.params.organisationId);
    
  },
  methods: {
    componentFile() {
      console.log(this.componentName)
      return () => import("./"+this.componentName+".vue");
    }
  }
}
</script>