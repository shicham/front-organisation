<template>
  <div class="app-sidebar is-light">
    <div class="app-sidebar-inner">
      <div class="simplebar-wrapper">




        <div class="simplebar-content" style="padding: 24px 28px 32px;">
          <ul class="app-menu app-menu-md">
            <li class="app-menu-heading"><h6 class="overline-title text-primary-alt">DASHBOARDS</h6></li>
            <li class="app-menu-item">
              <a href="/demo3/index.html" class="app-menu-link" data-original-title="" title="">
                <span class="app-menu-icon"><b-icon icon="pie-chart" class="icon"></b-icon></span>
                <span class="app-menu-text">Default Dashboard</span>
              </a>
            </li>
            <li class="app-menu-item">
              <a href="/demo3/index.html" class="app-menu-link" data-original-title="" title="">
                <span class="app-menu-icon"><b-icon icon="markdown" class="icon"></b-icon></span>
                <span class="app-menu-text">User Manage</span>
              </a>
            </li>
            <li class="app-menu-item">
              <a href="/demo3/index.html" class="app-menu-link" data-original-title="" title="">
                <span class="app-menu-icon"><b-icon icon="layout-split" class="icon"></b-icon></span>
                <span class="app-menu-text">Sales Dashboard</span>
              </a>
            </li>
            <li class="app-menu-item">
              <a href="/demo3/index.html" class="app-menu-link" data-original-title="" title="">
                <span class="app-menu-icon"><b-icon icon="hexagon" class="icon"></b-icon></span>
                <span class="app-menu-text">Crypto Dashboard</span>
              </a>
            </li>
            <li class="app-menu-heading"><h6 class="overline-title text-primary-alt">Pre-Built Pages</h6></li>
            <li class="app-menu-item">
              <a href="/demo3/index.html" class="app-menu-link" data-original-title="" title="">
                <span class="app-menu-icon"><b-icon icon="hourglass-top" class="icon"></b-icon></span>
                <span class="app-menu-text">Invest Dashboard</span>
              </a>
            </li>
            <li class="app-menu-item">
              <a href="/demo3/index.html" class="app-menu-link" data-original-title="" title="">
                <span class="app-menu-icon"><b-icon icon="hexagon-half" class="icon"></b-icon></span>
                <span class="app-menu-text">AML / KYCs</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SidebarMain',
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
.app-sidebar {
    position: fixed;
    top: 65px;
    width: 280px;
    min-height: calc(100vh - 65px);
    max-height: calc(100vh - 65px);
    background: #fff;
    z-index: 700;
    left: 0;
    border-right: 1px solid #e5e9f2;
    transform: translateX(-100%);
    transition: left 450ms ease,transform 450ms ease;
}
@media (min-width: 1200px){
.app-sidebar {
    transform: translateX(0);
}}
.app-sidebar.is-light {
    background: #fff;
    border-right-color: #ebeef2;
}
@media (min-width: 992px){
.has-apps-sidebar .app-sidebar {
    left: 80px;
}
}
.app-sidebar-inner {
    padding: 1.5rem 1.75rem 2rem;
    max-height: calc(100vh - 65px);
}


.app-menu-heading {
    padding: 0.25rem 24px 0.5rem;
    color: #8094ae;
}
.app-sidebar .app-menu-heading {
    padding-left: 0;
    padding-right: 0;
}
.app-menu-md .app-menu-heading {
    color: #526484;
}
.app-menu-item+.app-menu-heading {
    padding-top: 2.5rem;
}
.overline-title {
    font-size: 11px;
    line-height: 1.2;
    letter-spacing: 0.2em;
    color: #8094ae;
    text-transform: uppercase;
    font-weight: 700;
    font-family: Roboto,sans-serif,"Helvetica Neue",Arial,"Noto Sans",sans-serif;
}
.app-menu-heading .overline-title {
    color: inherit;
}
.app-menu-item {
    padding: 2px 0;
}

.app-menu-link {
    padding: .625rem 40px .625rem 24px;
    color: #6e82a5;
    font-family: Roboto,sans-serif;
    font-weight: 700;
    font-size: 15px;
    letter-spacing: .01em;
    text-transform: none;
    line-height: 1.25rem;
}

.app-menu li a {
    vertical-align: middle;
    display: flex;
    position: relative;
    align-items: center;
    transition: color .3s, background-color .3s;
}


.is-light .app-menu-link {
    color: #526484;
}


.app-menu-md .app-menu-link {
    padding-top: .325rem;
    padding-bottom: .325rem;
}
.app-sidebar .app-menu>li>a {
    padding-left: 0;
    padding-right: 0;
}

.app-menu-icon {
    font-weight: normal;
    letter-spacing: normal;
    width: 36px;
    line-height: 1;
    flex-grow: 0;
    color: #8094ae;
}
.app-menu-md .app-menu-icon {
    width: 1.75rem;
    margin-top: -2px;
}

.app-menu-text {
    flex-grow: 1;
    display: inline-block;
}
.app-menu-md .app-menu-text {
    font-size: 13px;
    line-height: 1.25rem;
}
.app-menu-icon .icon {
    font-size: 24px;
    letter-spacing: normal;
    vertical-align: middle;
    color: currentColor;
    transition: color .4s, background-color .4s;
}
.app-menu-md .app-menu-icon .icon {
    font-size: 1.25rem;
}


</style>

