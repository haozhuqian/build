import { ComponentInfo } from '../types';

/**
 * @param info 组件信息
 * @returns md 文件模板
 * 生成组件api文档模版
 */
export default (info: ComponentInfo) => {
  const { lName, zhName } = info;
  return `---
outline: [2, 6]
---

# ${lName} ${zhName}

## Attributes 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|  ----  | ----  | ----  | ----  | ----  |
|  |  |  |  | |

## Export 导出属性

| 名称 | 说明  | 类型 |
| ---- | ---- | ---- |
|  |  |  |

## Methods 方法

| 方法名 | 说明 | 参数 | 返回值 |
|  ----  | ----  | ----  | ----  |
|  |  |  |  |

## Events 事件

| 事件名 | 说明 | 参数 | 返回值 |
|  ----  | ----  | ----  | ----  |
|  |  |  |  |

## Slots 插槽

| 插槽名 | 说明 | 参数 |
|  ----  | ----  | ----  |
|  |  |  |
  `;
};
