<template>
<div class="app-block">
<b-card no-body class="card card-bordered card-stretch">
  <div class="card-inner position-relative card-tools-toggle bd-b-1">
    <div class="card-title-group">
      <div class="card-tools">
        dsd
      </div>
      <div class="card-tools mr-n1">
        uh
      </div>
    </div>
  </div>
  <div class="card-inner-group">
    <b-table class="ptable app-tb-list app-tb-ulist no-footer" tbody-tr-class="app-tb-item odd" responsive="sm"  hover :fields="fields" :items="organizations.data"
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
            <b-dropdown-item href="#">{{data.item.primaryPhone}}Action</b-dropdown-item>
              <b-dropdown-item href="#">Another action</b-dropdown-item>
            </b-dropdown></div>
      </template>
    </b-table>
  </div>
  <div class="card-inner bd-t-1">
    <div class="nk-block-between-md g-3">
      <div class="g">
        kk
      </div>
      <div class="g">
        44
      </div>
    </div>
  </div>
</b-card>
</div>

</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: 'Index',
  components: {},
  data() {
    return {
      selectMode: 'multi',
      selected: [],
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
    onRowSelected(items) {
      this.selected = items
    },
    getStatus(val){
      return this.$t("i18n.status")[val].label;
    },
    getStatusCss(val){
      return this.$t("i18n.status")[val].class;
    }
    
  },
  computed: {
   ...mapGetters({organizations: 'organisation/results'})
  },
  created() {
    this.$store.dispatch("organisation/find", {});
  }
}
</script>