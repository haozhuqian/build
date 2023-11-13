import Chart from './chart.vue';
import { type App, Plugin } from 'vue';
export { type ChartProps } from './types';

Chart.name = 'y-chart';

Chart.install = (app: App): App => {
  // 注册组件
  app.component('y-chart', Chart);
  return app;
};

export default Chart as typeof Chart & Plugin;
