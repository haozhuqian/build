import { type DefaultTheme } from 'vitepress';
export const components: DefaultTheme.SidebarItem[] = [
  { text: 'Button 按钮', link: '/components/button' },
  {
    text: 'Chart 图表',
    link: '/components/chart/demo',
    collapsed: true,
    items: [
      { text: 'demo 演示', link: '/components/chart/demo' },
      { text: 'api', link: '/components/chart/api' },
      { text: 'type 类型', link: '/components/chart/type' },
    ],
  },
  { text: 'InputKeyword 关键词', link: '/components/input-keyword' },
  { text: 'Video 播放器', link: '/components/video' },
]; // end
