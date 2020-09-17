<template>
<div class="app-header app-header-fixed is-light">
  <div class="container-fluid">
    <div class="app-header-wrap">
      <div class="app-header-app-name">
        <div class="app-header-app-logo">
          <b-icon icon="clock" font-scale="1.5" class="icon"></b-icon>
        </div>
        <div class="app-header-app-info">
          <span class="sub-text">DashLite</span>
          <span class="lead-text">Dashboard</span>
        </div>
      </div>
      <div class="app-header-menu is-light">
        <div class="app-header-menu-inner">

        </div>
      </div>
      <div class="app-header-tools">
        <ul class="app-quick-nav">
          <li>
              <b-dropdown size="lg"  variant="link" toggle-class="text-decoration-none" class="menu-item link-list" no-caret>
                <template v-slot:button-content>
                  <div class="user-avatar sm">
                  <b-icon icon="person" font-scale="1.5" class="icon"></b-icon>
                  </div>
                </template>
                <b-dropdown-item class="bg-lighter ">
                  <div class="dropdown-inner user-card-wrap d-none d-md-block">
                    <div class="user-card">
                      <div class="user-avatar">
                        <span>AB</span>
                      </div>
                      <div class="user-info">
                        <span class="lead-text">Abu Bin Ishtiyak</span>
                        <span class="sub-text">info@softnio.com</span>
                      </div>
                    </div>
                  </div>
                </b-dropdown-item>
                <b-dropdown-item href="#" class="link-l ptop">
                  <div class="dropdown-inner">
                    <b-icon icon="person" class="icon"></b-icon><span>Profile</span>
                  </div>
                </b-dropdown-item>
                <b-dropdown-item href="#" class="link-l">
                  <div class="dropdown-inner">
                    <b-icon icon="gear" class="icon"></b-icon><span>Account setting</span>
                  </div>
                </b-dropdown-item>
                <b-dropdown-item href="#" class="link-l pbot">
                  <div class="dropdown-inner">
                    <b-icon icon="person" class="icon"></b-icon><span>Login activity</span>
                  </div>
                </b-dropdown-item>
                <b-dropdown-item href="#" class="link-l logout">
                  <div class="dropdown-inner">
                    <b-icon icon="power" class="icon"></b-icon><span>Logout</span>
                  </div>
                </b-dropdown-item>
              </b-dropdown>

          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'Header',
  components: {
  },
  data() {
      return {
      }
    },
    computed: {
      
    }
}
</script>
<style>
.app-header {
    background: #f5f6fa;
    border-bottom: 1px solid #e5e9f2;
    padding: 0 6px;
}
.app-header-fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 800;
    min-width: 320px;
}
@media (min-width: 576px){
.app-header {
    padding: 0 14px;
}
}
.app-header.is-light:not([class*=bg-]) {
    background: #fff;
}
@media (min-width: 992px){
.app-apps-sidebar+.app-main>.app-wrap>.app-header-fixed {
    left: 80px;
}
}
.app-header-wrap {
    position: relative;
    display: flex;
    align-items: center;
    margin: 0 -.25rem;
}
.app-header-wrap>* {
    padding: 0 .25rem;
}
.app-header-app-name {
    display: flex;
    align-items: center;
    flex-shrink: 0;
}
.app-header-app-logo {
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    margin-right: 0.75rem;
}
.app-header-app-logo .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    font-size: 20px;
    color: #6576ff;
    background: rgba(101,118,255,0.3);
}
.app-header-app-info {
    line-height: 1.3;
}
.app-header-app-info .lead-text {
    font-size: 14px;
}
.app-header-app-info .sub-text {
    font-size: 11px;
    margin-bottom: 0.125rem;
}

.app-header-menu {
    position: fixed;
    top: 0;
    width: 280px;
    height: 100vh;
    max-height: 100vh;
    z-index: 999;
    background: #fff;
    left: 0;
    transform: translateX(-100%);
}
@media (min-width: 992px){
.app-header-menu {
    position: static;
    background: transparent;
    height: auto;
    max-height: auto;
    border-right: none;
    width: auto;
    padding: 0;
    overflow: visible;
    transform: translateX(0) !important;
}
}
.app-header-menu-inner {
    max-height: 100%;
    min-height: 100%;
}
.app-header-tools {
    margin-left: auto;
    padding-top: 14px;
    padding-bottom: 14px;
}

.nk-quick-nav {
    display: flex;
    align-items: center;
    margin: 0 -6px;
}
@media (min-width: 576px){
.nk-quick-nav {
    margin: 0 -10px;
}
}

.app-quick-nav>li {
    padding: 0 6px;
}
@media (min-width: 576px){
.app-quick-nav>li {
    padding: 0 10px;
}
}
.menu-item ul{
  margin:0px;
  padding:0px;
}
.menu-item ul li a{
  margin:0px;
  padding:0px;
}
.dropdown-inner {
    padding: 0 1.75rem;
}
.user-card-wrap {
    padding-top: 1.125rem;
    padding-bottom: 1.125rem;
} 

.app-quick-nav .dropdown-toggle::after {
    display: none;
}
.link-l{
  padding: .2rem 0;
}
.link-list a svg {
    font-size: 1.125rem;
    width: 2.5rem;
    line-height: 1;
}
.link-l a {
    display: flex;
    align-items: center;
    color: #526484;
    font-size: 13px;
    line-height: 1.4rem;
    font-weight: 500;
    padding: .575rem 0 !important;
    position: relative;

}
.link-list .bg-lighter  {
    border-bottom: 1px solid #e5e9f2;
}
.logout {
  padding: .75rem 0;
  border-top: 1px solid #e5e9f2;
}
.link-l a:hover {
  background:#fff;
  color:#798bff;
}
.ptop{
    padding-top: .9rem !important;
}
.pbot{
    padding-bottom: .9rem !important;
}
</style>