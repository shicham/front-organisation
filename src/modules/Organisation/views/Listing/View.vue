<template>
<div>
  ss
</div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: 'ViewForm',
  components: {
  },
  data() {
    return {}
  },
  computed: {
   ...mapGetters({organisation: 'organisation/result'})
  }
}
</script>