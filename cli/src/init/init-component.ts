import { ComponentInfo } from '../types';
import fs from 'fs';
import * as temp from '../template';
import { g } from '../utils/log-util';
import { execCmd } from '../utils/cmd-util';
import Config from '../../../config/ui-config/config';
import mkDir from '../utils/mk-dir';
import defaultCatch from '../utils/default-catch';
/**
 * @param info 组件信息
 * 创建组件目录及文件
 */
export default async (info: ComponentInfo) => {
  const { fullPath, sName, type } = info;
  const { STYLE_TYPE } = Config;
  // 1. 创建组件根目录
  await mkDir(fullPath, (_resolve, reject) =>
    reject(new Error('组件已存在')),
  ).catch(defaultCatch());
  await execCmd(`cd ${fullPath}`).catch(defaultCatch());
  // 2. 创建 xxx.vue 或 xxx.tsx
  fs.writeFileSync(
    `${fullPath}/${sName}.${type}`,
    type === 'vue' ? temp.vue(info) : temp.tsx(info),
  );
  // 7. 创建 types.ts 文件
  fs.writeFileSync(`${fullPath}/types.ts`, temp.types(info));
  // 8. 创建样式文件
  fs.writeFileSync(`${fullPath}/index.${STYLE_TYPE}`, temp.style(info));
  // 8. 创建 index.ts
  fs.writeFileSync(`${fullPath}/index.ts`, temp.index(info));

  g('component init success');
};
