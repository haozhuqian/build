import ChartNoData from './ChartNoData.vue';
import { type App, Plugin } from 'vue';
export { type ChartNoDataProps } from './types';

ChartNoData.name = 'y-chart-no-data';

ChartNoData.install = (app: App): App => {
  // 注册组件
  app.component('y-chart-no-data', ChartNoData);
  return app;
};

export default ChartNoData as typeof ChartNoData & Plugin;
