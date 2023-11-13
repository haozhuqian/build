import ChartLoading from './ChartLoading.vue';
import { type App, Plugin } from 'vue';
export { type ChartLoadingProps } from './types';

ChartLoading.name = 'y-chart-loading';

ChartLoading.install = (app: App): App => {
  // 注册组件
  app.component('y-chart-loading', ChartLoading);
  return app;
};

export default ChartLoading as typeof ChartLoading & Plugin;
