<template>
<ul class="btn-toolbar gx-1">
  <li class="">
  <div class="btn btn-icon search-toggle toggle-search h4 mb-0"><b-icon icon="search" size="1.5em"></b-icon></div>
  </li>
  <li class="btn-toolbar-sep"></li>
  <li>
    <div class="toggle-wrap">
      <div href="#" class="btn btn-icon  toggle active" data-target="cardTools">
      <b-icon icon="search" size="1.5em" ></b-icon>
      </div>
      <div class="toggle-content">
        <ul class="btn-toolbar gx-1">
          <li class="dropc">
          <FiltersForm></FiltersForm>
          </li>
          <li class="dropc link-check">
          <b-dropdown size="lg" right  variant="link" toggle-class="text-decoration-none" no-caret >
          <template v-slot:button-content >
            <span class="btn-trigger">
              <b-icon  class="btn-icon" icon="gear"></b-icon>
            </span>
          </template>
                    <b-dropdown-item href="#"><span class="f-tx-l">{{$t("i18n.SHOW")}}</span></b-dropdown-item>
                    <b-dropdown-item href="#">
                      <span class="active">5 <b-icon  width="1.1em" height="1.1em" class="btn-icon" icon="check"></b-icon></span>
                    </b-dropdown-item>
                    <b-dropdown-item href="#"><span>10</span></b-dropdown-item>
                    <b-dropdown-item href="#"><span>15</span></b-dropdown-item>
                    <b-dropdown-item href="#"><span>20</span></b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item href="#"><span class="f-tx-l">{{$t("i18n.ORDER")}}</span></b-dropdown-item>
                    <b-dropdown-item href="#" >
                      <span class="active">{{$t("i18n.DESC")}}<b-icon  width="1.1em" height="1.1em" class="btn-icon" icon="check"></b-icon></span>
                    </b-dropdown-item>
                    <b-dropdown-item href="#"><span>{{$t("i18n.ASC")}}</span></b-dropdown-item>
                  </b-dropdown>
          </li>
        </ul>
      </div>
    </div>
  </li>
</ul>
</template>
<script>
import { mapGetters } from "vuex";
import FiltersForm from './FiltersForm';
export default {
  name: 'Index',
  components: {
  FiltersForm
  },
  data() {
    return {}
  },
  computed: {
   ...mapGetters({nsOne: 'namespaced/nsOne'})
  }
}
</script>