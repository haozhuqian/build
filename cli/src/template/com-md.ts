import { ComponentInfo } from '../types';

/**
 * @param info 组件信息
 * @returns md 文件模板
 * 生成组件文档模版
 */
export default (info: ComponentInfo) => {
  const { lName, zhName, mName, sName } = info;

  return `
# ${lName} ${zhName}

## 基本使用

<preview path="../demos/${sName}/${mName}-1.vue" title="基本使用" description=" "></preview>

## 组件 API

### Attributes 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|  ----  | ----  | ----  | ----  | ----  |
|  |  |  |  | |

### Methods 方法

| 方法名 | 说明 | 参数 | 返回值 |
|  ----  | ----  | ----  | ----  |
|  |  |  |  |

### Events 事件

| 事件名 | 说明 | 参数 | 返回值 |
|  ----  | ----  | ----  | ----  |
|  |  |  |  |

### Slots 插槽

| 插槽名 | 说明 | 参数 |
|  ----  | ----  | ----  |
|  |  |  |
  `;
};
