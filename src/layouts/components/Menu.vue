<script setup lang="ts">
import type { MenuItem } from '@/types/layout'

const menuItems: MenuItem[] = [
  {
    type: MENU_ITEM_TYPE.HEADER,
    title: 'Menu',
  },
  {
    type: MENU_ITEM_TYPE.ITEM,
    title: 'Products',
    to: ROUTE.PRODUCTS.NAME,
    icon: 'mdi-cart',
  },
  {
    type: MENU_ITEM_TYPE.HEADER,
    title: 'Layout',
  },
  {
    type: MENU_ITEM_TYPE.ITEM,
    title: 'Form',
    to: ROUTE.FORM.NAME,
    icon: 'mdi-form-select',
  },
]
</script>

<template>
  <!-- Nav header -->
  <div class="nav-header">
    <RouterLink
      to="/"
      class="app-logo d-flex align-center gap-x-3 app-title-wrapper"
    >
      <Transition name="vertical-nav-app-title">
        <h1 class="font-weight-semibold leading-normal text-xl text-uppercase">
          MAQE
        </h1>
      </Transition>
    </RouterLink>
  </div>

  <!-- Nav items -->
  <ul>
    <template
      v-for="menuItem in menuItems"
      :key="menuItem.title"
    >
      <VerticalNavSectionTitle
        v-if="menuItem.type === MENU_ITEM_TYPE.HEADER"
        :item="{ heading: menuItem.title }"
      />
      <VerticalNavLink
        v-else
        :item="{
          title: menuItem.title,
          to: menuItem.to || null,
          icon: { icon: menuItem.icon },
        }"
      />
    </template>
  </ul>
</template>

<style lang="scss" scoped>
.upgrade-banner {
  margin-top: auto;
}
</style>
