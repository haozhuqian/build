import { ComponentInfo } from '../types';

/**
 * @param info 组件信息
 * @returns .vue 文件模板
 * vue 组件模版
 */
export default (info: ComponentInfo): string => {
  const { preMName, sName } = info;
  return `<template>
  <div class='${preMName}'>
    ${preMName}
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { ${sName}Props } from './types';
const props = defineProps(${sName}Props)
</script>

<style scoped lang="less">
@import './index.less';
</style>
  `;
};
