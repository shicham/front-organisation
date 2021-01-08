<template>
<b-dropdown size="lg" right   variant="link" toggle-class="text-decoration-none " no-caret >
  <template v-slot:button-content >
  <span class="btn-trigger">
    <b-icon  class="btn-icon" icon="filter"></b-icon>
    </span>
  </template>
  <b-dropdown-header id="dropdown-header-label">  {{this.query.typeId}}
    <span class="sub-title dropdown-title">{{$t('i18n.Filters')}}</span>
  
  </b-dropdown-header>
  <b-dropdown-form class="dropdown-menu-xl dropdown-body dropdown-body-rg filter-wg">
    <div class="row gx-6 gy-3">
      <div class="col-12">
        <b-form-group labal-class="overline-title overline-title-alt" :label="$t('i18n.InternalCode')" label-for="dropdown-form-InternalCode">
          <b-form-input id="dropdown-form-InternalCode" v-model="query.internalCode"  :placeholder="$t('i18n.InternalCode')"></b-form-input>
        </b-form-group>
      </div>
      <div class="col-12">
        <b-form-group labal-class="overline-title overline-title-alt" :label="$t('i18n.Name')" label-for="dropdown-form-Name">
          <b-form-input id="dropdown-form-Name" :placeholder="$t('i18n.Name')" v-model="query.name" ></b-form-input>
        </b-form-group>
      </div>
      <div class="col-6">
        <b-form-group labal-class="overline-title overline-title-alt" :label="$t('i18n.Status')" label-for="dropdown-form-Status">
          <b-form-select  v-model="query.statusId" id="dropdown-form-Status"  class="select-m">
          <b-form-select-option selected value="">{{$t('i18n.All')}}</b-form-select-option>
          <b-form-select-option  v-for="act in options" v-bind:key="act.id" :value="act.id">{{act.label}}</b-form-select-option>
          </b-form-select>
        </b-form-group>
      </div>
      <div class="col-6">
        <b-form-group labal-class="overline-title overline-title-alt" :label="$t('i18n.Type')" label-for="dropdown-form-Type">
          <b-form-select  v-model="query.typeId" id="dropdown-form-Type"  class="select-m">
          <b-form-select-option selected value="">{{$t('i18n.All')}}</b-form-select-option>
          <b-form-select-option  v-for="act in options" v-bind:key="act.id" :value="act.id">{{act.label}}</b-form-select-option>
          </b-form-select>
        </b-form-group>
      </div>
      <div class="col-6">
        <b-button variant="secondary" v-on:click="apply" >Filter</b-button>
      </div>

    </div>
  </b-dropdown-form>
</b-dropdown>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: 'FiltersForm',
  components: {

  },
  data() {
    return {
      query: {},
      options: [{id:3, label: 'ddd'},{id:4, label: 'sss'}]
    }
  },
  computed: {
   ...mapGetters({filter: 'organisation/filter'})
  },
  methods: {
    apply() {
      this.filter.criteria = [];
      this.filter.criteria.push({'key':'name', 'operation':'MATCH', 'value': this.query.name});
      if(this.query.internalCode){
        this.filter.criteria.push({'key':'internalCode', 'operation':'EQUAL', 'value': this.query.internalCode});
      }
      if(this.query.typeId){
        let typeIds = [];
        typeIds.push(this.query.typeId);
        this.filter.criteria.push({'key':'typeId', 'operation':'IN', 'values': typeIds});
      }
      if(this.query.statusId){
        let statusIds = [];
        statusIds.push(this.query.statusId);
        this.filter.criteria.push({'key':'statusId', 'operation':'IN', 'values': statusIds});
      }
      
      
      this.$store.dispatch("organisation/find", this.filter);
    }
  }
}
</script>