import Video from './video.vue';
import { type App, Plugin } from 'vue';
export { type VideoProps } from './types';

Video.name = 'y-video';

Video.install = (app: App): App => {
  // 注册组件
  app.component('y-video', Video);
  return app;
};

export default Video as typeof Video & Plugin;
