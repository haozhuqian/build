---
outline: [2, 6]
---

## Attribute

| 参数       | 说明                            | 类型                      | 可选值     | 默认值         |
| ---------- | ------------------------------- | ------------------------- | ---------- | -------------- |
| title      | 图表标题                        | string                    | 任意字符串 | `''`           |
| getDate    | 异步获取图表数据对象的函数      | `()=>Promise<T>`          |            | `async ()=>{}` |
| isNoDate   | 是否无数据                      | `(date:T)=>boolean`       |            | `()=>false`    |
| getOptions | 图表的配置项,参数为图表数据对象 | `(date:T)=>ECBasicOption` |            |                |
| chartStyle | 自定义组件内部元素css类名       | `Partial<ChartStyle>`     |            |                |

## Export

| 名称        | 说明                                           | 类型              |
| ----------- | ---------------------------------------------- | ----------------- |
| chart       | 对象，echartinit返回的实例，可以调用其上的方法 | `echarts.ECharts` |
| referesh    | 方法，调用后刷新图表数据                       | `()=>void`        |
| DefaultClas | 对象，组件内元素的class名                      | `ChartStyle`      |

## Events

| 事件名 | 说明 | 参数 | 返回值 |
| ------ | ---- | ---- | ------ |
|        |      |      |        |

## Slots

| 插槽名  | 说明     | 参数 |
| ------- | -------- | ---- |
| title   | 标题插槽 |      |
| no-data | 标题插槽 |      |
