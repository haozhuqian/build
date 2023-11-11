import Button from './button.vue';
import { type App, Plugin } from 'vue';
export { type ButtonProps } from './types';

Button.name = 'y-button';
Button.install = (app: App): App => {
  // 注册组件
  app.component('y-button', Button);
  return app;
};

export default Button as typeof Button & Plugin;
