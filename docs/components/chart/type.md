## ChartProps

chart组件的props类型

```typescript
export interface ChartProps<T = any> {
  title: string;
  getDate: () => Promise<T>;
  isNoDate: (date: T) => boolean;
  getOptions: (date: T) => ECBasicOption;
  chartStyle?: Partial<ChartStyle>;
}
```

## ChartStyle

保存chart组件内元素的css类名

```typescript
export interface ChartStyle {
  titleOutClass: string;
  titleinnerClass: string;
  chartOutClass: string;
  chartInnerClass: string;
  loadingClass: string;
  noDateClass: string;
}
```
