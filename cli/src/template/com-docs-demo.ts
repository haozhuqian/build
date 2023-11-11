import { ComponentInfo } from '../types';

/**
 * @param info 组件信息
 * @returns md 文件模板
 * 生成组件demo文档模版
 */
export default (info: ComponentInfo) => {
  const { lName, zhName, mName, sName } = info;

  return `
# ${lName} ${zhName}

## 基本使用

<preview path="../../demos/${sName}/${mName}-1.vue" title="基本使用" description=" "></preview>

  `;
};
