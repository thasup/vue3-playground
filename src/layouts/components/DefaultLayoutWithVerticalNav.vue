<template>
  <VerticalNavLayout>
    <!--  navbar -->
    <template #navbar>
      <VSpacer />
      <NavbarThemeSwitcher />
      <UserProfile />
    </template>

    <!--  Menu -->
    <template #navigation-menu>
      <Menu />
    </template>

    <!--  Pages -->
    <div class="layout-page-content">
      <RouterView />
    </div>
  </VerticalNavLayout>
</template>

<style lang="scss" scoped>
.app-bar-search {
  .v-input__control {
    width: 236px;
  }

  .v-field__outline__start {
    border-radius: 28px 0 0 28px !important;
    flex-basis: 20px !important;
  }

  .v-field__outline__end {
    border-radius: 0 28px 28px 0 !important;
  }
}
</style>
