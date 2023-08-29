<template>
  <div class="loading-wrapper">
    <VProgressCircular indeterminate />
  </div>
</template>

<style lang="scss" scoped>
.loading-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 908; // set z-index more than nav bar

  background-color: rgba(var(--v-theme-grey-200));
  opacity: 0.3;
}
</style>
