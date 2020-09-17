<template>
<div class="app-app-root">
  <Sidebar></Sidebar>
  <div class="app-main">
  <div class="app-wrap">
    <Header></Header>
    <SidebarMain></SidebarMain>
    <div class="app-content ">
      <div class="container-fluid">
      <div class="app-content-inner">
      <div class="app-content-body">
      <transition name="fade-transform" mode="out-in">
        <router-view />
      </transition>
      </div>
      </div>
      </div>
    </div>
  </div>
  </div>
</div>
</template>
<script>
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'
import SidebarMain from './SidebarMain.vue'



export default {
  name: 'Index',
  components: {
    Sidebar,
    Header,
    SidebarMain
  },
  data() {
      return {
      }
    },
    computed: {
      
    }
}
</script>

<style lang="scss">
  @import "../../assets/fonts/fonts.css";
  @import "../../assets/custom.scss";
  @import "../../../node_modules/bootstrap/scss/bootstrap.scss";
  @import "../../assets/style.scss";


@media (min-width: 992px){
.app-apps-sidebar+.app-main {
    padding-left: 80px;
}
}
.app-main {
    position: relative;
}

.app-wrap {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
.has-sidebar .app-wrap {
    padding-top: 65px;
}
@media (min-width: 1200px){
.has-sidebar .app-wrap {
    padding: 65px 0 0 280px;
}
}

.app-content {
    padding: 24px 4px;
}
@media (min-width: 576px){
.app-content {
    padding: 32px 14px;
}
}
.app-content-body {
    flex-grow: 1;
}
</style>
