<template>
  <div class="app-block">
    <b-card no-body class="card card-bordered card-stretch">
    <div class="card-inner-group">
      <div class="card-inner position-relative card-tools-toggle">
        <div class="card-title-group">
          <div class="card-tools"><Actions></Actions></div>
          <div class="card-tools mr-n1"><Filters></Filters></div>
        </div>
      </div>
      <div class="card-inner p-0">
        <div class="table-wrap table-responsive bd-0">
          <table class="app-tb-list app-tb-ulist no-footer">
            <thead>
              <tr class="app-tb-item app-tb-head">
                <th class="app-tb-col app-tb-col-check">
                  <b-form-checkbox id="checkbox-1" name="checkbox-1" value="accepted" unchecked-value="not_accepted"></b-form-checkbox>
                </th>
                <th class="app-tb-col sorting"><span class="sub-text">{{$t('i18n.Organisation')}}</span></th>
                <th class="app-tb-col app-col-mb sorting"><span class="sub-text">{{$t('i18n.InternalCode')}}</span></th>
                <th class="app-tb-col app-col-mb sorting"><span class="sub-text">{{$t('i18n.Address')}}</span></th>
                <th class="app-tb-col app-col-mb sorting"><span class="sub-text">{{$t('i18n.Hierarchy')}}</span></th>
                <th class="app-tb-col app-col-mb sorting"><span class="sub-text">{{$t('i18n.Manager')}}</span></th>
                <th class="app-tb-col app-col-mb sorting"><span class="sub-text">{{$t('i18n.status.Status')}}</span></th>
                <th class="app-tb-col app-tb-col-tools text-right sorting"></th>
              </tr>
            </thead>
            <tbody>
            <tr class="app-tb-item odd" v-bind:class="{'app-tb-item-selected' : organisation.selected}" v-for="organisation in organisations.list" v-bind:key="organisation.id">
                <td class="app-tb-col app-tb-col-check ">
                  <b-form-checkbox  v-model="organisation.selected" ></b-form-checkbox>
                </td>
                <td class="app-tb-col">
                  <a href="/demo3/user-details-regular.html">
                    <div class="user-card">
                      <div class="user-avatar bg-primary">
                        <span>{{ organisation.name | substrin(2) }}</span>
                      </div>
                      <div class="user-info">
                        <span class="tb-lead">{{organisation.name}}<span class="dot dot-success d-md-none ml-1"></span></span>
                        <span>{{organisation.typeLabel}}-</span>
                      </div>
                    </div>
                  </a>
                </td>
                <td class="app-tb-col tb-col-mb">
                  <span class="tb-amount"><span class="currency">{{organisation.internalCode}}</span></span>
                </td>
                <td class="app-tb-col tb-col-md">
                <span ></span>
                  <span class="tb-lead-sub" v-if="organisation.address">{{organisation.address.address.city}} {{organisation.address.address.postcode}}</span>
                  <span class="tb-sub" v-if="organisation.address">{{organisation.address.address.housenumber}} {{organisation.address.address.street}}</span>
                </td>
                <td class="app-tb-col tb-col-lg">               
                  <span class="tb-lead-sub">{{organisation.parentLabel}} </span>
                  <span class="tb-sub">{{organisation.parentInternalCode}}</span>
                </td>
                <td class="app-tb-col tb-col-lg">
                  <span class="tb-lead-sub">{{organisation.managerName}} </span>
                  <span class="tb-sub">{{organisation.managerInternalCode}}</span>
                </td>
                <td class="app-tb-col tb-col-md">
                  <span class="tb-status text-success" v-bind:class="getUsetStatus(organisation.status).class">
                    {{getUsetStatus(organisation.status).label}}
                  </span>
                </td>
                <td class="app-tb-col app-tb-col-tools dropc" id="popover-target-1">
                  <b-dropdown size="lg"  dropup variant="link" toggle-class="text-decoration-none" no-caret >
                    <template v-slot:button-content >
                      <b-icon  width="1.1em" height="1.1em" class="btn-icon" icon="three-dots"></b-icon>
                    </template>
                    <b-dropdown-item :to="{ name: 'OrganisationView', params: { organisationId: organisation.id } }">
                      <b-icon  width="1.1em" height="1.1em" class="btn-icon" icon="eye"></b-icon> {{$t('i18n.viewDetail')}}
                    </b-dropdown-item>
                  </b-dropdown></td>
              </tr>
              
            </tbody>
          </table>
         
        </div>
       </div>
       </div>
    </b-card>

  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Actions from './Actions.vue'
import Filters from './Filters.vue'

export default {
  name: 'Index',
  components: {
    Actions,Filters
  },
  data() {
    return {}
  },
  methods: {
    getUsetStatus(status){
      let sts = {};
      switch (status) {
        case 'active':
          sts = {key:'active', label:this.$t("i18n.status."+status), class: 'text-success'}
          break;
        case 'inactive':
          sts = {key:'inactive', label:this.$t("i18n.status."+status), class: 'text-danger'}
          break;
      }
      return sts;
    }
  },
  computed: {
   ...mapGetters({organisations: 'organisation/results',filter: 'organisation/filter'})
  },
  created() {
    this.$store.dispatch("organisation/find", this.filter);
  }
}
</script>