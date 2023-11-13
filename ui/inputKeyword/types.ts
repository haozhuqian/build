import { ExtractPropTypes, PropType } from 'vue';
export const inputKeywordProps = {
  keys: {
    type: Array as PropType<string[]>,
    default: [],
  },
} as const;

export type InputKeywordProps = ExtractPropTypes<typeof inputKeywordProps>;
