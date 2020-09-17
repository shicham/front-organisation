<template>
<b-dropdown size="lg" right  variant="link" toggle-class="text-decoration-none" no-caret >
                    <template v-slot:button-content ><b-icon  width="1.1em" height="1.1em" class="btn-icon" icon="filter"></b-icon></template>
                    <b-dropdown-header id="dropdown-header-label">
      <span class="sub-title dropdown-title">Dropdown header</span>
    </b-dropdown-header>
                    <b-dropdown-item href="#">Actions</b-dropdown-item>
                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                  </b-dropdown>
</template>
<script>

export default {
  name: 'FiltersForm',
  components: {
  },
  data() {
    return {}
  }
}
</script>