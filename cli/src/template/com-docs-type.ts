import { ComponentInfo } from '../types';

/**
 * @param info 组件信息
 * @returns md 文件模板
 * 生成组件type文档模版
 */
export default (info: ComponentInfo) => {
  const { lName, zhName } = info;

  return `# ${lName} ${zhName}

## ${lName}Props

${lName}组件的props类型

\`\`\`typescript
export interface ${lName}Props {

}
\`\`\`

  `;
};
