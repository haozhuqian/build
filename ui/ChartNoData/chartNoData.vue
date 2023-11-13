<template>
  <div class="y-chart-no-data">
    <p><i class="el-icon-time"></i></p>
    <h4>{{ props.title }}</h4>
    <h5>{{ props.text }}</h5>
  </div>
</template>

<script lang="ts" setup>
import { chartNoDataProps } from './types';
const props = defineProps(chartNoDataProps);
</script>

<style scoped lang="less">
@import './index.less';
</style>
