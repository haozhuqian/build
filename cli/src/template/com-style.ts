import { ComponentInfo } from '../types';

/**
 * @param info 组件信息
 * @returns 组件样式文件模板
 * 生成组件样式文件模板
 */
export default (info: ComponentInfo): string => {
  const { preMName } = info;
  return `
@import '../_style/index.less';

.${preMName} {

}
  `;
};
