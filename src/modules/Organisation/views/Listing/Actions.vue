<template>
<div class="form-inline flex-nowrap gx-3">
  <div>
    <b-dropdown v-bind:text="action.label" variant="outline-light" class="m-2 bulkAct">
      <b-dropdown-item v-on:click="clear">{{$t('i18n.bulkAction')}}</b-dropdown-item>
      <b-dropdown-item v-for="act in actions" v-bind:key="act.method" v-on:click="action=act">{{act.label}}</b-dropdown-item>
    </b-dropdown>
  </div>
  <div>
    <b-button class="btn-dim" variant="outline-light" :disabled="!action.method" v-on:click="apply">{{$t('i18n.Apply')}}</b-button>
  </div>
</div>
</template>
<script>
export default {
  name: 'Index',
  components: {
  },
  data() {
      return {
        action : {
          method: '',
          label: this.$t('i18n.bulkAction')
        },
        actions: [
          {
            method: 'delete',
            label: this.$t('i18n.Delete')
          },
          {
            method: 'activate',
            label: this.$t('i18n.Activate')
          },
          {
            method: 'desactivate',
            label: this.$t('i18n.Desactivate')
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
        alert(this.action.method)
      }
    },
    computed: {
      
    }
}
</script>