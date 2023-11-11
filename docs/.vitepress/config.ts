import type { DefaultTheme } from 'vitepress';
import { defineConfig } from 'vitepress';
import {
  componentPreview,
  containerPreview,
} from '@vitepress-demo-preview/plugin';
import { components } from '../components';
// import files from '../file';
const nav: DefaultTheme.NavItem[] = [
  { text: '指南', link: '/guide/' },
  { text: '组件', link: '/components/' },
  { text: '开发', link: '/develop/file' },
];

const sidebar: DefaultTheme.Sidebar = {
  '/guide': [
    {
      text: '使用指南',
      items: [
        { text: '组件库介绍', link: '/guide/' },
        { text: '快速开始', link: '/guide/quickstart' },
      ],
    },
  ],
  '/components': [
    {
      text: '组件文档',
      items: [...components],
    },
  ],
  '/develop': [
    {
      text: '开发指南',
      items: [
        {
          text: '文件结构',
          link: '/develop/file' /*items: files,collapsed: true,*/,
        },
        { text: '新建组件', link: '/develop/new' },
        { text: '提交规范', link: '/develop/commit' },
      ],
    },
  ],
};

export default defineConfig({
  title: 'yeez-ui',
  description: '组件库',
  lang: 'cn-ZH',
  base: '/',
  srcDir: '.',
  lastUpdated: true,
  themeConfig: {
    siteTitle: 'yeez-ui',
    outline: 3,
    socialLinks: [{ icon: 'github', link: '#' }],
    nav,
    sidebar,
  },
  markdown: {
    lineNumbers: true,
    config(md) {
      md.use(componentPreview);
      md.use(containerPreview);
    },
  },
});
