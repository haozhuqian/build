<template>
  <div class="chart">
    <div :class="[DefaultClass.titleOutClass, props.chartStyle?.titleOutClass]">
      <slot name="title">
        <h3
          :class="[
            DefaultClass.titleinnerClass,
            props.chartStyle?.titleinnerClass,
          ]"
        >
          {{ props.title }}
        </h3>
      </slot>
    </div>
    <div
      v-if="isLoading"
      :class="[DefaultClass.loadingClass, props.chartStyle?.loadingClass]"
    >
      <slot name="loading"><chart-loading /></slot>
    </div>
    <div
      v-else
      :class="[DefaultClass.chartOutClass, props.chartStyle?.chartOutClass]"
    >
      <slot v-if="props.isNoDate(chartData.value)" name="no-data">
        <chart-no-data
          :class="[DefaultClass.noDateClass, props.chartStyle?.noDateClass]"
          :title="'No data in this time range'"
          text="Try a different time range or check again later."
        />
      </slot>
      <div
        v-else
        ref="chart"
        :class="[
          DefaultClass.chartInnerClass,
          $props.chartStyle?.chartInnerClass,
        ]"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { chartProps, ChartStyle } from './types';
import ChartLoading from '../ChartLoading';
import ChartNoData from '../ChartNoData';
import { echarts } from './echarts';
const props = defineProps(chartProps);
const chart = ref<HTMLElement>();
const isLoading = ref<boolean>(true);
const chartData = ref<any>(null);
const myChart = ref<echarts.ECharts>();
const refersh = async () => {
  isLoading.value = true;
  chartData.value = await props.getDate();
  myChart.value?.dispose();
  myChart.value?.setOption(props.getOptions(chartData.value), true);
  isLoading.value = false;
};
onMounted(async () => {
  myChart.value = echarts.init(chart.value, null, { locale: 'EN' });
  refersh();
});
const DefaultClass: ChartStyle = {
  titleOutClass: 'chart-title',
  titleinnerClass: 'chart-title-inner',
  loadingClass: 'loading-box',
  chartOutClass: 'chart-body',
  chartInnerClass: 'charts-box',
  noDateClass: 'no-data-box',
};
defineExpose({
  chart: myChart,
  refersh,
  DefaultClass,
});
onUnmounted(() => {
  chartData.value = {};
  myChart.value?.dispose();
});
</script>

<style scoped lang="less">
@import './index.less';
</style>
