<template>
  <div class="y-chart-loading">
    <div class="reverse-spinner"></div>
  </div>
</template>

<script lang="ts" setup>
import { chartLoadingProps } from './types';
defineProps(chartLoadingProps);
</script>

<style scoped lang="less">
@import './index.less';
</style>
