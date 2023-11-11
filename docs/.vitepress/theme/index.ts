import DefaultTheme from 'vitepress/theme';
import { AntDesignContainer } from '@vitepress-demo-preview/component';
import '@vitepress-demo-preview/component/dist/style.css';
import { EnhanceAppContext } from 'vitepress';
import YeezUI from '@yeez-ui/ui';
export default {
  ...DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    ctx.app.use(YeezUI);
    ctx.app.component('demo-preview', AntDesignContainer);
  },
};
