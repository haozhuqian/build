import { ExtractPropTypes } from 'vue';

export const videoProps = {
  src: {
    type: String,
    default: '',
  },
} as const;

export type VideoProps = ExtractPropTypes<typeof videoProps>;
