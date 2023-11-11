import { ComponentInfo } from '../types';
import Config from '../../../config/ui-config/config';
const { PREFIX } = Config;

/**
 * @param info 组件信息
 * @returns 文档组件demo模板
 * 生成文档组件demo模板
 */
export default (info: ComponentInfo) => {
  const { preMName, lName } = info;
  return `
<template>
  <${preMName}></${preMName}>
</template>

<script lang="ts" setup>
import { ${lName} as ${PREFIX.toUpperCase() + lName} } from '@yeez-ui/ui';
</script>

<style scoped lang="less">
</style>
`;
};
