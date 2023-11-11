import { ComponentInfo } from '../types';
import path from 'path';
import Config from '../../../config/ui-config/config';
import fs from 'fs';
import { g } from '../utils/log-util';

/**
 * 在组件库中添加新组件的导出与依赖
 */
export default async (info: ComponentInfo) => {
  const { ROOT_Path, LIB_PATH } = Config;
  const { lName, sName } = info;
  // 组件库入口的路径
  const libPath = path.resolve(ROOT_Path, LIB_PATH);

  // 更新入口 components.ts

  const indexPath = path.resolve(libPath, 'components.ts');
  const result = fs.readFileSync(indexPath).toString().concat(`

export * from './${sName}';
export { default as ${lName} } from './${sName}';`);
  fs.writeFileSync(indexPath, result);

  g('component library update success');
};
