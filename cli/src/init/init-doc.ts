import { ComponentInfo } from '../types';
import { g } from '../utils/log-util';
import path from 'path';
import fs from 'fs';
import mkDir from '../utils/mk-dir';
import * as temp from '../template';
import Config from '../../../config/ui-config/config';
import defaultCatch from '../utils/default-catch';
const { ROOT_Path, DOC_PATH } = Config;
/**
 * 创建组件文档、demo及更新菜单
 */
export default async (info: ComponentInfo) => {
  const { sName, mName, lName, zhName } = info;
  // 组件库文档根路径
  const docRootPath = path.resolve(ROOT_Path, DOC_PATH);
  // 1.1 创建组件文档的目录
  await mkDir(
    path.resolve(docRootPath, `components/${mName}`),
    (_resolve, reject) => reject(new Error('组件文档已存在')),
  ).catch(defaultCatch());
  // 1.2 创建组件的api文档
  fs.writeFileSync(
    path.resolve(docRootPath, `components/${mName}/api.md`),
    temp.mdApi(info),
  );
  // 1.3 创建组件的demo文档
  fs.writeFileSync(
    path.resolve(docRootPath, `components/${mName}/demo.md`),
    temp.mdDemo(info),
  );
  // 1.3 创建组件的type文档
  fs.writeFileSync(
    path.resolve(docRootPath, `components/${mName}/type.md`),
    temp.mdType(info),
  );

  // 2. 创建组件文档中的 Demo
  await mkDir(path.resolve(docRootPath, `demos/${sName}`));
  fs.writeFileSync(
    path.resolve(docRootPath, `demos/${sName}/${mName}-1.vue`),
    temp.demo(info),
  );

  // 3. 更新组件库文档菜单
  const menuPath = path.resolve(docRootPath, 'components.ts');
  const content = fs.readFileSync(menuPath).toString();
  const result = content.replace(
    ']; // end',
    ` {
    text: '${lName} ${zhName}',
    link: '/components/${mName}/demo',
    collapsed: true,
    items: [
      { text: 'demo 演示', link: '/components/${mName}/demo', },
      { text: 'api', link: '/components/${mName}/api', },
      { text: 'type 类型', link: '/components/${mName}/type', },
    ],
  },
$&`,
  );
  fs.writeFileSync(menuPath, result);
  g('component document init success');
};
