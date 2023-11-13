import { ExtractPropTypes } from 'vue';

export const chartNoDataProps = {
  title: {
    type: String,
    default: '暂无数据',
  },
  text: {
    type: String,
    default: '暂无数据',
  },
} as const;

export type ChartNoDataProps = ExtractPropTypes<typeof chartNoDataProps>;
