<script setup lang="ts">
const authStore = useAuthStore()
const router = useRouter()

function onLogout() {
  authStore.logout()
}

watch(
  () => authStore.isLoggedIn,
  newIsLoggedIn => {
    if (!newIsLoggedIn) {
      router.replace(ROUTE.LOGIN.PATH)
    }
  },
)
</script>

<template>
  <VAvatar
    style="cursor: pointer"
    color="primary"
    variant="tonal"
  >
    <VIcon
      class="avatar"
      icon="mdi-account-circle"
    />

    <!-- SECTION Menu -->
    <VMenu
      activator="parent"
      width="230"
      location="bottom end"
      offset="14px"
    >
      <VList>
        <!-- User Avatar & Name -->
        <VListItem>
          <template #prepend>
            <VListItemAction start>
              <VAvatar
                color="primary"
                variant="tonal"
              >
                <VIcon
                  class="avatar"
                  icon="mdi-account-circle"
                />
              </VAvatar>
            </VListItemAction>
          </template>

          <VListItemTitle class="font-weight-semibold">
            {{ authStore.username }}
          </VListItemTitle>
        </VListItem>

        <VDivider class="my-2" />

        <!-- Logout -->
        <VListItem @click="onLogout">
          <template #prepend>
            <VIcon
              class="me-2"
              icon="mdi-logout-variant"
              size="22"
            />
          </template>

          <VListItemTitle>Log out</VListItemTitle>
        </VListItem>
      </VList>
    </VMenu>
    <!-- !SECTION -->
  </VAvatar>
</template>

<style scoped>
.avatar {
  width: 100%;
  height: 100%;
}
</style>
