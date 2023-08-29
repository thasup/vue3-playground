<script setup lang="ts">
const toastStore = useToastStore()

const className = computed(() => {
  return `toast-${toastStore.message.type}`
})

const iconName = computed(() => {
  switch (toastStore.message.type) {
    case TOAST_TYPE.SUCCESS:
      return 'check-circle-outline'
    case TOAST_TYPE.ERROR:
      return 'alert-circle-outline'
    case TOAST_TYPE.WARNING:
      return 'alert-outline'
    case TOAST_TYPE.INFO:
      return 'information-outline'
    default:
      break
  }
})
</script>

<template>
  <div class="toast-wrapper">
    <VSnackbar
      v-model="toastStore.message.isShow"
      :timeout="5000"
      width="60"
      color="rgb(var(--v-theme-on-secondary))"
      rounded="lg"
      location="top right"
    >
      <div
        class="toast"
        :class="className"
      >
        <div class="text-subtitle-1 font-weight-bold pa-1 d-flex align-center justify-space-between">
          <div class="d-flex align-center">
            <VIcon
              class="mr-1"
              :icon="`mdi-${iconName}`"
            />
            {{ toastStore.message.header }}
          </div>

          <VBtn
            color="white"
            icon="mdi-close"
            density="compact"
            variant="text"
            size="small"
            @click="toastStore.hideToast()"
          />
        </div>

        <div class="text-body-1 pt-3 pb-3 pl-2 pr-2">
          {{ toastStore.message.content }}
        </div>
      </div>
    </VSnackbar>
  </div>
</template>

<style lang="scss" scoped>
.toast .text-subtitle-1 {
  color: rgb(var(--v-theme-on-secondary));
}

.toast-success {
  .text-subtitle-1 {
    background-color: rgb(var(--v-theme-success));
  }
}

.toast-error {
  .text-subtitle-1 {
    background: rgb(var(--v-theme-error));
  }
}

.toast-info {
  .text-subtitle-1 {
    background: rgb(var(--v-theme-info));
  }
}

.toast-warning {
  .text-subtitle-1 {
    background: rgb(var(--v-theme-warning));
  }
}
</style>
