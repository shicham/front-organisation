<template>
  <div class="app-apps-sidebar is-theme">
        <div class="app-apps-brand">
            <a href="/demo3/index.html" class="logo-link">
              <img class="logo-light logo-img" src="../../assets/images/logo-small.png" alt="logo">
              <img class="logo-dark logo-img" src="../../assets/images/logo-dark-small.png" alt="logo-dark">
            </a>
        </div>
        <div class="app-sidebar-element">
          <div class="app-sidebar-body">
            <div class="app-sidebar-content"><div class="app-sidebar-menu">
              <ul class="app-menu apps-menu">
                            <li class="app-menu-item active current-page">
                              <a class="app-menu-link">
                                <span class="app-menu-icon">
                                 <b-icon icon="camera" font-scale="1.4"></b-icon>
                                </span>
                              </a>
                            </li>
                            <li class="app-menu-item">
                              <a class="app-menu-link">
                                <span class="app-menu-icon">
                                 <b-icon icon="exclamation-circle" font-scale="1.4"></b-icon>
                                </span>
                              </a>
                            </li>
                            <li class="app-menu-item">
                              <a class="app-menu-link">
                                <span class="app-menu-icon">
                                 <b-icon icon="calendar2-check" font-scale="1.4"></b-icon>
                                </span>
                              </a>
                            </li>
                            <li class="app-menu-hr"></li>
                            <li class="app-menu-item">
                              <a class="app-menu-link">
                                <span class="app-menu-icon">
                                 <b-icon icon="chat-quote" font-scale="1.4"></b-icon>
                                </span>
                              </a>
                            </li>
                            <li class="app-menu-item">
                              <a class="app-menu-link">
                                <span class="app-menu-icon">
                                 <b-icon icon="clock" font-scale="1.4"></b-icon>
                                </span>
                              </a>
                            </li>
                          </ul>
            </div> </div>
          </div>
        </div>
      </div>
</template>
<script>
export default {
  name: 'Sidebar',
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

.app-apps-sidebar {
    display: none;
    background-color: #f5f6fa;
    border-right: 1px solid #e5e9f2;
}
@media (min-width: 992px){
.app-apps-sidebar {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1099;
    width: 80px;
}
}
.app-apps-sidebar.is-theme {
    background: #29347a;
    border-color: #3644a0;
}
.logo-link {
    position: relative;
    display: inline-block;
    align-items: center;
}
.app-apps-brand .logo-link {
    position: relative;
    padding: 1rem 1.5rem 2rem;
}

.logo-light {
    opacity: 0;
}
.logo-img {
    max-height: 36px;
}

.logo-img:not(:first-child) {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
}
.app-apps-brand .logo-img:not(:first-child) {
    left: 1.5rem;
    margin-top: -0.5rem;
}
.tc-light .logo-light, .is-dark .logo-light, .is-theme .logo-light {
    opacity: 1;
}
.app-sidebar-element {
    overflow: hidden;
    width: 100%;
    max-height: 100%;
}
.app-sidebar-body {
    position: relative;
}
.app-sidebar-content {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 65px);
}
@media (min-width: 992px)
.app-apps-sidebar .app-sidebar-content {
    height: calc(100vh - 65px - 90px);
}
.simplebar-wrapper {
    overflow: hidden;
    width: inherit;
    height: inherit;
    max-width: inherit;
    max-height: inherit;
}
.app-sidebar-content[data-simplebar]>div {
    width: 100%;
}
.simplebar-height-auto-observer-wrapper {
    box-sizing: inherit !important;
    height: 100%;
    width: 100%;
    max-width: 1px;
    position: relative;
    float: left;
    max-height: 1px;
    overflow: hidden;
    z-index: -1;
    padding: 0;
    margin: 0;
    pointer-events: none;
    flex-grow: inherit;
    flex-shrink: 0;
    flex-basis: 0;
}
.simplebar-mask {
    direction: inherit;
    position: absolute;
    overflow: hidden;
    padding: 0;
    margin: 0;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: auto !important;
    height: auto !important;
    z-index: 0;
}



.app-sidebar-content .app-sidebar-menu {
    padding-top: 1.5rem;
}
@media (min-width: 1200px){
.app-sidebar-content .app-sidebar-menu {
    padding-top: 1rem;
    padding-bottom: 1.5rem;
}
}
.app-apps-sidebar .app-sidebar-content .app-sidebar-menu {
    padding-top: 1rem;
}
.app-apps-sidebar .app-menu {
    padding-left: 0;
    padding-right: 0;
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
.is-theme .nk-menu-link {
    color: #9cadfd;
}
.apps-menu .app-menu-link {
    padding: .75rem .5rem;
    text-align: center;
}
.app-apps-sidebar .app-menu-link {
    padding: .75rem .5rem;
    text-align: center;
}
.apps-menu .app-menu-link:before {
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    left: 0;
    border-radius: 0 2px 2px 0;
    width: 3px;
    background: #7f8dff;
    opacity: 0;
}
.app-menu-icon {
    font-weight: normal;
    letter-spacing: normal;
    width: 36px;
    line-height: 1;
    flex-grow: 0;
    color: #8094ae;
}
.is-theme .app-menu-icon {
    color: #9cadfd;
}
.apps-menu .app-menu-icon {
    width: 100%;
}
.app-apps-sidebar .app-menu-icon {
    width: 100%;
}
.app-menu-icon svg {
    font-size: 24px;
    letter-spacing: normal;
    vertical-align: middle;
    color: currentColor;
    transition: color .4s, background-color .4s;
}
</style>

