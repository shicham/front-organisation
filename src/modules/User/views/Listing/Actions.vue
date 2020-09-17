<template>
<div class="form-inline flex-nowrap gx-3">
  <div>
    <b-dropdown text="Primary" variant="outline-light" class="m-2">
      <b-dropdown-item href="#">Action</b-dropdown-item>
      <b-dropdown-item href="#">Another action</b-dropdown-item>
      <b-dropdown-item href="#">Something else here</b-dropdown-item>
    </b-dropdown>
  </div>
  <div><b-button class="btn-dim" variant="outline-light" disabled>light</b-button></div>
</div>
</template>
<script>
export default {
  name: 'Index',
  components: {
  },
  data() {
      return {}
    },
    computed: {
      
    }
}
</script>