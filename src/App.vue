<template>
  <div id="app" class="app-body npc-default has-apps-sidebar has-sidebar no-touch nk-nio-theme" >
      <router-view></router-view>
      <router-link :to="{ name: 'UserListing' }">Homes</router-link>
      <router-link :to="{ name: 'OrganisationListing' }">Organisation</router-link>
      <router-link :to="{ name: 'theme' }">theme</router-link>
  </div>
</template>
<script>
  export default {
    
  }
</script>
<style>



</style>

