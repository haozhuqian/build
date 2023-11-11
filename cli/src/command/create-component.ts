import inquirer, { QuestionCollection } from 'inquirer';
import { ComponentInfo } from '../types';
import { closeLoading, showLoading } from '../utils/loading-util';
import { g } from '../utils/log-util';
import initComponent from '../init/init-component';
import updateIndex from '../init/update-index';
import initDoc from '../init/init-doc';
import defaultCatch from '../utils/default-catch';
// 交互提示
const questions: QuestionCollection = [
  {
    name: 'componentName',
    message: '请输入组件的英文名(小驼峰命名): ',
    default: '',
  },
  {
    name: 'description',
    message: '请输入组件的中文名: ',
    default: '',
  },
  {
    type: 'list',
    name: 'componentType',
    message: '你需要哪种组件模版: ',
    choices: ['tsx', 'vue'],
  },
];
/**
 *
 * @param mName 组件的小驼峰命名
 * @param description 组件的描述
 * @param type 组件的类型（vue 或 tsx）
 */
const createErrCatch = defaultCatch(closeLoading);
const createNewComponent = async (
  mName: string,
  description: string,
  type: 'vue' | 'tsx',
) => {
  showLoading('加载中, 请稍等...');
  // 1. 构造 ComponentInfo 对象
  const info = new ComponentInfo(mName, description, type);
  // 2. 创建组件目录及文件
  await initComponent(info).catch(createErrCatch);
  // 3. 更新组件库入口
  await updateIndex(info).catch(createErrCatch);
  // 4. 创建组件库文档
  await initDoc(info).catch(createErrCatch);

  closeLoading();
  g(`组件 [${info.mName} ${info.zhName}] 创建完成`);
};

export const createComponent = () => {
  inquirer
    .prompt(questions)
    .then(({ componentName, description, componentType }) => {
      createNewComponent(componentName, description, componentType);
    });
};
