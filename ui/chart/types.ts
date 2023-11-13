import { ECBasicOption } from 'echarts/types/dist/shared';
import { ExtractPropTypes, PropType } from 'vue';

export interface ChartStyle {
  titleOutClass: string;
  titleinnerClass: string;
  chartOutClass: string;
  chartInnerClass: string;
  loadingClass: string;
  noDateClass: string;
}
export const chartProps = {
  /**
   * 标题内容
   */
  title: {
    type: String,
    required: true,
  },
  /**
   * 异步获取图表数据对象的函数
   * @returns 图表的数据对象
   */
  getDate: {
    type: Function as PropType<() => Promise<any>>,
    required: true,
  },
  /**
   * 是否无数据
   * @param date 图表的数据对象
   * @returns
   */
  isNoDate: {
    type: Function as PropType<(date: any) => boolean>,
    required: true,
  },
  /**
   * 图表的配置项
   */
  getOptions: {
    type: Function as PropType<(date: any) => ECBasicOption>,
    required: true,
  },
  /**
   * 自定义组件内部元素css类名
   */
  chartStyle: {
    type: Function as PropType<Partial<ChartStyle>>,
    required: false,
  },
} as const;

export type ChartProps = ExtractPropTypes<typeof chartProps>;
