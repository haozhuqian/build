import { ComponentInfo } from '../types';

/**
 * @param info 组件信息
 * @returns types.ts 文件模板
 * 组件类型文件模板
 */
export default (info: ComponentInfo): string => {
  const { sName, lName } = info;
  return `import { ExtractPropTypes, PropType } from 'vue'

export const ${sName}Props = {
  // 以下是举例，更多写法请参考官方文档
  keys: {
    type: Array as PropType<string[]>,
    required: false,
    default:[]
  },
} as const

export type ${lName}Props = ExtractPropTypes<typeof ${sName}Props>
  `;
};
