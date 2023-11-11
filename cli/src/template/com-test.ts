import { ComponentInfo } from '../types';

export default (info: ComponentInfo) => {
  const { lName, mName } = info;
  return `
import ${lName} from './${mName}'
import { mount } from '@vue/test-utils'
describe('----测试${mName}组件----', () => {
  it('${mName}组件应该存在', () => {
    expect(${lName}).toBeTruthy()
  })
  it('${mName}组件应该可以被渲染', () => {
    const wrapper = mount(${lName})
    expect(wrapper.classes()).toContain('h-${mName}')
  })
})
  `;
};
