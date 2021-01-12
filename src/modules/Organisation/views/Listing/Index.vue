<template>
<div>
<div class="app-block-head app-block-head-sm">
  <div class="app-block-between">
    <div class="app-block-head-content">
      <h3 class="app-block-title page-title">{{$t("i18n.OrganisationsLists")}}</h3>
      <div class="app-block-des text-soft"><p>{{$t("i18n.YouHaveTotal")}} {{organizations.totalElements}} {{$t("i18n.organisations")}}.</p></div>
    </div>
    <div class="app-block-head-content">
      <div class="toggle-wrap app-block-tools-toggle">
        <div class="toggle-expand-content">
          <ul class="app-block-tools g-3">
            <li>
              <a href="#" class="btn btn-white btn-outline-light"><b-icon icon="telephone-inbound" ></b-icon><span>{{$t("i18n.BulkExport")}}</span></a>

              <b-dropdown id="dropdown-1" text="Dropdown Button" class=" btn-white btn-outline-light">
                <b-dropdown-item>First Action</b-dropdown-item>
                <b-dropdown-item>Second Action</b-dropdown-item>
                <b-dropdown-item>Third Action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item active>Active action</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
            </li>
            <li class="nk-block-tools-opt">
              <b-button-group class="act-add">
                <b-button variant="primary" >
                  <plus-circle-icon size="1.5x" class="custom-class"></plus-circle-icon> {{$t("i18n.AddOrganization")}}
                </b-button>
                <b-button variant="primary" class="bd-l-w " v-bind:class="[selected.length != 1 ? 'disabled' : '']">
                  <plus-circle-icon size="1.5x" class="custom-class"></plus-circle-icon> {{$t("i18n.AddPerson")}}
                </b-button>
              </b-button-group>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="app-block">

<b-card no-body class="card card-bordered card-stretch">
  <div class="card-inner position-relative card-tools-toggle bd-b-1">
    <div class="card-title-group">
      <div class="card-tools">
        <Actions :selected="selected"></Actions>
      </div>
      <div class="card-tools mr-n1">
        <Filters></Filters>
      </div>
    </div>
  </div>
  <div class="card-inner-group">
    <b-table class="ptable app-tb-list app-tb-ulist app-tb-list app-tb-ulist is-compact no-footer" tbody-tr-class="app-tb-item odd" responsive="sm"  hover :fields="fields" :items="organizations.data"
    selectable @row-selected="onRowSelected" :select-mode="selectMode">
      <template #cell(internalCode)="data">
          <div class="user-card">
            <div class="user-avatar bg-primary">
              <span>{{data.item.name | substrin}}</span>
            </div>
            <div class="user-info">
              <span class="tb-lead">{{data.item.name}}
              <span class="dot dot-success d-md-none ml-1"></span></span><span>{{data.item.internalCode}}</span>
            </div>
          </div>
      </template>
      <template #cell(primaryEmail)="data">
          <div class="user-card">
            <div class="user-info">
              <span class="tb-lead">{{data.item.primaryEmail}}</span>
              <span><b-icon icon="telephone-inbound" ></b-icon> {{data.item.primaryPhone}}</span>
            </div>
          </div>
      </template>
      <template #cell(statusId)="data">
         <span class="tb-status" :class="getStatusCss(data.item.statusCode)">{{ getStatus(data.item.statusCode)}}</span>
      </template>
      <template #cell(externalCode)="data">
        <div class="app-tb-col app-tb-col-tools" id="popover-target-1">
          <b-dropdown size="lg" dropleft variant="link" toggle-class="text-decoration-none"  >
            <template v-slot:button-content >
              <b-icon  width="1.1em" height="1.1em" class="btn-icon" icon="three-dots"></b-icon>
            </template>
            
            <b-dropdown-item href="#" v-on:click="viewDetails(data.items.id)">
              <b-icon  width="1.1em" height="1.1em" class="btn-icon" icon="cloud-download"></b-icon> 
              {{$t("i18n.AddBulkExport")}}
            </b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item href="#" v-on:click="viewDetails(data.items.id)">
              <b-icon  width="1.1em" height="1.1em" class="btn-icon" icon="eye"></b-icon> 
              {{$t("i18n.ViewDetails")}}
            </b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item href="#">
              <b-icon  width="1.1em" height="1.1em" class="btn-icon" icon="diagram3"></b-icon>
              {{$t("i18n.ChildPersons")}}
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <b-icon  width="1.1em" height="1.1em" class="btn-icon" icon="diagram3-fill"></b-icon>
              {{$t("i18n.ChildOrganizations")}}
            </b-dropdown-item>
          </b-dropdown>
        </div>
      </template>
    </b-table>
  </div>
  <div class="card-inner bd-t-1">
    <div class="app-block-between-md g-3 tpagin">
      <div class="g">
        <b-pagination
          v-model="currentPage"
          :total-rows="organizations.totalElements"
          :per-page="filter.size"
          aria-controls="my-table"
          @click.native="finds"
          
        ></b-pagination>
      </div>
      
    </div>
  </div>
</b-card>
</div>
</div>
</template>
<script>
import { mapGetters } from "vuex";
import { findByParent } from "@/modules/Referentiel/api/referentiel"
import Actions from './Actions';
import Filters from './Filters';

import { PlusCircleIcon } from 'vue-feather-icons'

export default {
  name: 'Index',
  components: {Actions,Filters,PlusCircleIcon},
  data() {
    return {
      selectMode: 'multi',
      selected: [],
      currentPage: 1,
      fields : [
        {
          label: this.$t("i18n.Organisation"),
          key: 'internalCode',
          tdClass: "app-tb-col tb-col-mb"
        },
        {
          label: this.$t("i18n.Contact"),
          key: 'primaryEmail',
          tdClass: "app-tb-col tb-col-mb"
        },
        {
          label: this.$t("i18n.Attachement"),
          key: 'parentName',
          tdClass: "app-tb-col tb-col-mb"
        },
        {
          label: this.$t("i18n.Type"),
          key: 'typeLabel',
          tdClass: "app-tb-col tb-col-mb"
        },
        {
          label: this.$t("i18n.status.Status.label"),
          key: 'statusId',
          tdClass: "app-tb-col tb-col-mb"
        },
        {
          label: "",
          key: 'externalCode',
          tdClass: "app-tb-col tb-col-mb"
        }
      ]
    }
  },
  methods: {
    current(){
      return this.filter.page-1
    },
    onRowSelected(items) {
      let arr = [];
      items.forEach((val) => {
        arr.push(val.id);
      })
      this.$store.dispatch("organisation/setSelectedIds", arr);
    },
    getStatus(val){
      return this.$t("i18n.status")[val].label;
    },
    getStatusCss(val){
      return this.$t("i18n.status")[val].class;
    },
    finds(){
      this.filter.page = this.currentPage - 1;

      this.$store.dispatch("organisation/find", this.filter);
      this.$store.dispatch("organisation/setFilter", this.filter);
    },
    findByParent(parentCode) {
      return new Promise((resolve, reject) => {
        findByParent(parentCode)
          .then(response => {
            this.items = response.data;
            resolve();
          })
          .catch(error => {
            console.log(error);
            reject(error);
          });
      });
    }
  },
  computed: {
   ...mapGetters({organizations: 'organisation/results', filter: 'organisation/filter', selectedIds: 'organisation/selectedIds'})
  },
  created() {
    this.$store.dispatch("organisation/find", this.filter);
  }
}
</script>