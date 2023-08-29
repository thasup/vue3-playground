<script lang="ts" setup>
import { useDisplay } from 'vuetify'

const { lgAndUp, mdAndDown } = useDisplay()

const drawer = ref(lgAndUp.value)
</script>

<template>
  <VNavigationDrawer
    v-model="drawer"
    app
    floating
    sticky
    :absolute="false"
    style="background: rgb(var(--v-theme-background))"
    class="layout-vertical-nav position-fixed"
  >
    <slot name="navigation-menu" />
  </VNavigationDrawer>
  <VAppBar
    app
    flat
    density="compact"
    class="px-6 layout-navbar position-fixed"
    style="background: rgb(var(--v-theme-background))"
  >
    <template
      v-if="mdAndDown"
      #prepend
    >
      <VAppBarNavIcon
        class="d-block d-lg-none me-2 ms-n3"
        color="inherit"
        @click="drawer = true"
      />
    </template>
    <slot name="navbar" />
  </VAppBar>
  <VMain
    id="main"
    class="w-100 layout-main"
  >
    <div
      id="content-container"
      class="pa-6 layout-main-inner"
    >
      <slot />
    </div>
  </VMain>
</template>

<style lang="scss">
.layout-vertical-nav {
  top: 0 !important;
  height: 100% !important;

  .v-navigation-drawer__content {
    display: flex;
    flex-direction: column;

    > ul {
      flex-grow: 1;
    }
  }
}

.layout-main {
  max-height: 100vh;
  overflow: auto;
}

.layout-main-inner {
  height: 100%;
}

.v-toolbar__prepend {
  margin-inline-start: 0 !important;
}

.v-footer {
  padding-left: 24px !important;
  padding-right: 24px !important;
}
</style>
