<template>
<div class="app-block">
<b-card no-body class="card card-bordered card-stretch">
  <div class="card-inner-group">
    <b-table striped hover :items="rows"></b-table>
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
      
      cols : [
        {
          label: 'Name',
          field: 'name'
        },
        {
          label: 'Birth Date',
          field: 'birth_date',
          align: 'center',
          sort: (a, b) => new Date(a).getTime() - new Date(b).getTime() // Custom sort function
        },
        {
          label: '',
          field: 'gender',
          sort: false
        },
        {
          label: 'City',
          field: 'address["city"]'
        }
        ,
        {
          label: 'City',
          field: 'address["city"]'
        }
      ]
    }
  },
  methods: {
    
  },
  computed: {
   ...mapGetters({organizations: 'organisation/results'})
  },
  created() {
    this.$store.dispatch("organisation/find", {});
  }
}
</script>