import { App, Plugin } from 'vue';
import * as components from './components';
export * from './components';

export const install = function (app: App) {
  Object.keys(components).forEach((key) => {
    const component = (components as { [key: string]: Plugin })[key];
    if (component.install) {
      app.use(component);
    }
  });
  return app;
};

export default { install };
