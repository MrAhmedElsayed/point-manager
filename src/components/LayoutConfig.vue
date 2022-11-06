<template>
  <main class="mx-auto m-0 p-0">
    <b-navbar
      class="navbar navbar-expand-lg navbar-light bg-light"
      v-if="showNav"
      style="border-radius: 25px 25px 0 0"
    >
      <router-link class="navbar-brand" to="/">
        <img
          src="../assets/logo.png"
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt="app logo"
        />
        <span class="righteous-font text-primary">Bootstrap</span>
      </router-link>
      <b-navbar-nav class="mx-auto">
        <b-nav-item href="#">Import</b-nav-item>
        <b-nav-item href="#">Export</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right no-caret>
          <template #button-content>
            <b-icon-gear-wide-connected></b-icon-gear-wide-connected>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
    <slot name="layout-content"></slot>
  </main>
</template>

<script>
export default {
  name: "LayoutConfig",
  props: {
    showNav: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
