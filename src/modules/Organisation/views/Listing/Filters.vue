<template>
<ul class="btn-toolbar gx-1">
  
  <li>
    <div class="toggle-wrap">
      <div href="#" class="btn btn-icon  toggle active btn-toolbar-sep" data-target="cardTools">
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
                    <b-dropdown-item v-for="shows in show" v-bind:key="show.key" v-on:click="setPageSize(show.key)" >
                      <span class="active" >{{show.key}} <b-icon  width="1.1em" height="1.1em" class="btn-icon" icon="check"></b-icon></span>
                    </b-dropdown-item>
                    
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
    return {
      size: 10,
      shows: [
        {key:5, visible:false},
        {key:10, visible:false},
        {key:15, visible:false},
        {key:20, visible:false},
        {key:25, visible:false},
        {key:30, visible:false}
      ]
    }
  },
  methods: {
    setPageSize(size){
      this.filter.size = size
      this.$store.dispatch("organisation/find", this.filter);
    }
  },
  computed: {
    ...mapGetters({filter: 'organisation/filter'})
  }
}
</script>