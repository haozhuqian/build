import InputKeyword from './inputKeyword.tsx';
import { type App, Plugin } from 'vue';
export { type InputKeywordProps } from './types';

InputKeyword.install = (app: App): App => {
  // 注册组件
  app.component('y-input-keyword', InputKeyword);
  return app;
};

export default InputKeyword as typeof InputKeyword & Plugin;
