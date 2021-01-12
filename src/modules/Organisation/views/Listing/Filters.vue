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
                    
            <b-dropdown-item v-for="show in shows" v-bind:key="show.key" v-on:click="setPageSize(show.key)" >
              <span class="active" >
                {{show.key}} 
                <b-icon  v-if="filter.size === show.key" width="1.1em" height="1.1em" class="btn-icon" icon="check"></b-icon>
              </span>
            </b-dropdown-item>
                    
            <b-dropdown-divider></b-dropdown-divider>

            <b-dropdown-item href="#"><span class="f-tx-l">{{$t("i18n.ORDER")}}</span></b-dropdown-item>

            <b-dropdown-item v-for="order in orders" v-bind:key="order.key" v-on:click="setOrder(order)" >
              <span class="active" >{{order.label}} 
                <b-icon  v-if="filter.sort[0].key == order.key" width="1.1em" height="1.1em" class="btn-icon" icon="check"></b-icon>
              </span>
            </b-dropdown-item>
          
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
        {key:7, visible:false},
        {key:10, visible:false},
        {key:15, visible:false},
        {key:20, visible:false},
        {key:25, visible:false},
        {key:30, visible:false}
      ],
      orders: [
        {direction:'ASC', label:this.$t('i18n.ASC'), property:'name'},
        {direction:'DESC', label:this.$t('i18n.DESC'), property:'name'}
      ]
    }
  },
  methods: {
    setPageSize(size){
      this.filter.size = size;
      this.filter.page = 0;
      this.$store.dispatch("organisation/setFilter", this.filter);
      this.$store.dispatch("organisation/find", this.filter);
    },
    setOrder(order){
      this.filter.sort = [];
      this.filter.sort.push(order);
      this.$store.dispatch("organisation/find", this.filter);
    }
  },
  computed: {
    ...mapGetters({filter: 'organisation/filter'})
  }
}
</script>