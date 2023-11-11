<template>
  <a-button type="primary">Primary Button</a-button>
</template>

<script lang="ts" setup>
import { Button as AButton } from 'ant-design-vue';
import { buttonProps } from './types';
defineProps(buttonProps);
</script>
<style scoped lang="less">
@import './index.less';
</style>
