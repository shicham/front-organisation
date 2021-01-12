<template>
<div class="form-inline flex-nowrap gx-3">
  <div>
    <b-dropdown v-bind:text="action.label" variant="outline-light" class="m-2 bulkAct" :disabled="selected.length == 0">
      <b-dropdown-item v-on:click="clear">{{$t('i18n.bulkAction')}}</b-dropdown-item>

      <b-dropdown-item href="#"><span class="f-tx-l">{{$t("i18n.STATUS")}}</span></b-dropdown-item>
      
        <b-dropdown-item v-for="act in actionsStatus" v-bind:key="act.id+'status'" class="itmact" v-on:click="action=act">{{act.label}}</b-dropdown-item>
      
      <b-dropdown-item href="#"><span class="f-tx-l">{{$t("i18n.TYPES")}}</span></b-dropdown-item>

        <b-dropdown-item v-for="act in actionsType" v-bind:key="act.id+'type'" class="itmact" v-on:click="action=act">{{act.label}}</b-dropdown-item>

    </b-dropdown>
  </div>
  <div>
    <b-button class="btn-dim" variant="outline-light" :disabled="action.method == 'null'  || selected.length == 0" v-on:click="apply">{{$t('i18n.Apply')}}</b-button>
    <span class="mg-l-20 fs-12" v-if="selectedIds.length > 0">{{selectedIds.length}} {{$t('i18n.selected-s')}}</span>
  </div>
</div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: 'Index',
  components: {
  },
  props: ['selected'],
  data() {
      return {
        show: false,
        action : {
          method: 'null',
          id: null,
          label: this.$t('i18n.bulkAction')
        },
        actionsStatus: [
          {
            method: 'status',
            id: 3,
            label: this.$t('i18n.status.active.label')
          },
          {
            method: 'status',
            id: 4,
            label: this.$t('i18n.status.inactive.label')
          },
          {
            method: 'status',
            id: 6,
            label: this.$t('i18n.status.pending.label')
          }
        ],
        actionsType: [
          {
            method: 'type',
            id: 1,
            label: this.$t('i18n.organization.type.Admin')
          },
          {
            method: 'type',
            id: 2,
            label: this.$t('i18n.organization.type.CEO')
          }
        ]
      }
    },
    methods: {
      clear() {
        this.action = {
          method: '',
          label: this.$t('i18n.bulkAction')
        }
      },
      apply() {
        console.log(this.selectedIds);
        this.$store.dispatch("organisation/"+this.action.method, {ids: this.selectedIds, objectId: this.action.id})
        .then(() => {
          this.$bvToast.toast("operation bien effectue", {
            title: "Création véhicule",
            variant: "success"
          });
          this.$store.dispatch("organisation/find", this.filter);
        });

    }
    },
    computed: {
      ...mapGetters({selectedIds: 'organisation/selectedIds', filter: 'organisation/filter'})
    },
}
</script>