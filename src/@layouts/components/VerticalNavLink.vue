<script lang="ts" setup>
import type { NavLink } from '@layouts/types'
import { getComputedNavLinkToProp, isChildActive } from '@layouts/utils'

defineProps<{ item: NavLink }>()
</script>

<template>
  <li
    class="nav-link"
    :class="{ disabled: item.disable }"
  >
    <Component
      :is="item.to ? 'RouterLink' : 'a'"
      v-bind="getComputedNavLinkToProp(item)"
      :class="[isChildActive(item) ? 'router-link-active router-link-exact-active' : '']"
    >
      <VIcon
        v-bind="item.icon"
        class="nav-item-icon"
      />
      <TransitionGroup name="transition-slide-x">
        <!--  Title -->
        <span
          key="title"
          class="nav-item-title"
        >
          {{ item.title }}
        </span>

        <!--  Badge -->
        <span
          v-if="item.badgeContent"
          key="badge"
          class="nav-item-badge"
          :class="item.badgeClass"
        >
          {{ item.badgeContent }}
        </span>
      </TransitionGroup>
    </Component>
  </li>
</template>

<style lang="scss" scoped>
.layout-vertical-nav {
  .nav-link a {
    display: flex;
    align-items: center;
  }
}
</style>
