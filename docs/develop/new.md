# 开始

## 项目导入本地

git clone https://gitee.com/YeeZTech/yeez-ui.git

## 安装依赖

(所有操作必须用pnpm)

```shell
pnpm install
```

没有pnpm的话全局安装一个

```shell
npm install pnpm -g
```

## 创建空白组件模板

```
pnpm new
```

## 组件开发

在组件对应目录下types.ts书写组件相关类型与组件props默认值，.vue或者.tsx文件编写组件业务代码，index.less文件下书写对应样式。

如果需要更复杂的组件文件结构，可以在组件文件夹下根据需要创建文件夹，只要保证在组件根目录下的index.ts中导出所有需要导出的类型，函数与样式即可。

## 预览组件

### 在文档中预览

```shell
pnpm run docs:dev
```

## 文档编写

在.md中写内容，.vue中写需要展示的组件，可以参考button组件的样例引入组件展示

## 单元测试

待完善

## 打包

待完善
