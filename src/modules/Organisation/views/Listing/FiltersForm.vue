<template>
<b-dropdown size="lg" right   variant="link" toggle-class="text-decoration-none" no-caret >
  <template v-slot:button-content ><b-icon  width="1.1em" height="1.1em" class="btn-icon" icon="filter"></b-icon></template>
  <b-dropdown-header id="dropdown-header-label">
    <span class="sub-title dropdown-title">Dropdown header</span>
  </b-dropdown-header>
  <b-dropdown-form class="dropdown-menu-xl dropdown-body dropdown-body-rg filter-wg">
    <div class="row gx-6 gy-3">
      <div class="col-12">
        <b-form-group labal-class="overline-title overline-title-alt" :label="$t('i18n.Name')" label-for="dropdown-form-email">
          <b-form-input id="dropdown-form-email" placeholder="email@example.com"></b-form-input>
        </b-form-group>
      </div>
      <div class="col-6">
        <b-form-checkbox id="checkbox-active" v-model="filter.status.active" >{{$t('i18n.status.active')}}</b-form-checkbox>
      </div>
      <div class="col-6">
        <b-form-checkbox id="checkbox-inactive" v-model="filter.status.inactive" >{{$t('i18n.status.inactive')}}</b-form-checkbox>
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
    return {}
  },
  computed: {
   ...mapGetters({filter: 'Organisation/filter'})
  }
}
</script>