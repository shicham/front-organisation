<template>
<b-dropdown size="lg" right   variant="link" toggle-class="text-decoration-none " no-caret >
  <template v-slot:button-content >
  <span class="btn-trigger">
    <b-icon  class="btn-icon" icon="filter"></b-icon>
    </span>
  </template>
  <b-dropdown-header id="dropdown-header-label">
    <span class="sub-title dropdown-title">Dropdown header</span>
  </b-dropdown-header>
  <b-dropdown-form class="dropdown-menu-xl dropdown-body dropdown-body-rg filter-wg">
    <div class="row gx-6 gy-3">
      
      <div class="col-6">
        <b-form-checkbox id="checkbox-active" v-model="filter.statusOption.active" >{{$t('i18n.status.active')}}</b-form-checkbox>
      </div>
      <div class="col-6">
        <b-form-checkbox id="checkbox-inactive" v-model="filter.statusOption.inactive" >{{$t('i18n.status.inactive')}}</b-form-checkbox>
      </div>
      <div class="col-12">
        <b-form-group labal-class="overline-title overline-title-alt" :label="$t('i18n.Name')" label-for="dropdown-form-Name">
          <b-form-input id="dropdown-form-Name" :placeholder="$t('i18n.Name')" v-model="filter.name" ></b-form-input>
        </b-form-group>
      </div>
      <div class="col-6">
        <b-form-group labal-class="overline-title overline-title-alt" :label="$t('i18n.InternalCode')" label-for="dropdown-form-InternalCode">
          <b-form-input id="dropdown-form-InternalCode" v-model="filter.internalCode"  :placeholder="$t('i18n.InternalCode')"></b-form-input>
        </b-form-group>
      </div>
      <div class="col-6">
        <b-form-group labal-class="overline-title overline-title-alt" :label="$t('i18n.Type')" label-for="dropdown-form-Type">
          <b-form-select  v-model="filter.typeId" id="dropdown-form-Type" :options="options" class="select-m"></b-form-select>
        </b-form-group>
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
      options: []
    }
  },
  computed: {
   ...mapGetters({filter: 'organisation/filter'})
  }
}
</script>