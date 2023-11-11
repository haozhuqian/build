import { ComponentInfo } from '../types';

/**
 * @param info 组件信息
 * @returns 组件入口 index.ts 文件模板
 * 生成组件入口 index.ts 文件模板
 */
export default (info: ComponentInfo): string => {
  const { sName, lName, preMName, type } = info;
  return `import ${lName} from './${sName + '.' + type}';
import { type App, Plugin } from 'vue';
export { type ${lName}Props } from './types';


${type === 'vue' ? `\n${lName}.name = '${preMName}'\n` : ''}
${lName}.install = (app: App): App => {
  // 注册组件
  app.component('${preMName}', ${lName});
  return app;
}

export default ${lName} as typeof ${lName} & Plugin;
`;
};
