<script setup lang="ts">
const props = defineProps<{
  title: string
  description?: string
}>()
</script>

<template>
  <div
    id="page-header"
    class="pb-4"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
        class="pt-0"
      >
        <div class="d-flex align-center">
          <h2 class="mr-1">
            {{ props.title }}
          </h2>
          <VBtn
            v-if="props.description"
            icon
            variant="text"
            density="compact"
            size="small"
          >
            <VIcon>mdi-information</VIcon>
            <VTooltip
              activator="parent"
              location="end"
              max-width="400px"
            >
              {{ props.description }}
            </VTooltip>
          </VBtn>
        </div>
      </VCol>
      <VCol
        cols="12"
        md="6"
        class="d-flex justify-md-end pt-0"
      >
        <div class="action">
          <slot />
        </div>
      </VCol>
    </VRow>
  </div>
</template>
