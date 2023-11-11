import { ComponentInfo } from '../types';

/**
 * @param info 组件信息
 * @returns .tsx 文件模板
 * tsx 组件模版
 */
export default (info: ComponentInfo): string => {
  const { sName, preMName } = info;
  return `
import { defineComponent } from 'vue'
import { ${sName}Props } from './types'

const NAME = '${preMName}'

export default defineComponent({
  name: NAME,
  props: ${sName}Props,
  setup (props, { slots }) {
    return () => (
      <div class={ NAME }>
        <div>
          ${preMName}
        </div>
      </div>
    )
  }
})
  `;
};
