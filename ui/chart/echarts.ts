import * as echarts from 'echarts/core';

import {
  LineChart,
  BarChart,
  EffectScatterChart,
  PieChart,
  ScatterChart,
} from 'echarts/charts';

import {
  MarkPointComponent,
  MarkLineComponent,
  GridComponent,
  MarkAreaComponent,
  TransformComponent,
  LegendComponent,
  TooltipComponent,
  TitleComponent,
} from 'echarts/components';

import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  MarkPointComponent,
  MarkLineComponent,
  GridComponent,
  MarkAreaComponent,
  TransformComponent,
  LineChart,
  PieChart,
  BarChart,
  EffectScatterChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  LegendComponent,
  TooltipComponent,
  TitleComponent,
  ScatterChart,
]);
export { echarts };
