import { ExtractPropTypes } from 'vue';
import { ButtonProps as AButtonProps } from 'ant-design-vue';
export const buttonProps = {} as const;
export type ButtonProps = ExtractPropTypes<typeof buttonProps> & AButtonProps;
