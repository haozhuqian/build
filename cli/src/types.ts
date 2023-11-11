import * as path from 'path';
import { mToL, mToS, sToM } from './utils/name-util';
import Config from '../../config/ui-config/config';
const { ROOT_Path, LIB_NAME, LIB_PATH, PREFIX } = Config;

/**
 * 组件信息
 */
export class ComponentInfo {
  /** 组件的小驼峰命名，如：navBar */
  sName: string;
  /** 组件中划线分隔的名称，如：nav-bar */
  mName: string;
  /** 组件带组件前缀的中划线分隔的名称 如：y-nav-bar */
  preMName: string;
  /** 组件的大驼峰名 如：NavBar */
  lName: string;
  /** 组件所在的路径 */
  fullPath: string;
  /** 组件全名 如：@y-demo-ui/nav-bar */
  libName: string;
  /**
   *
   * @param enName 组件的小驼峰名
   * @param zhName 组件的中文名
   * @param Type 组件的类型（vue 或 tsx）
   */

  constructor(
    enName: string,
    public zhName: string,
    public type: 'vue' | 'tsx',
  ) {
    this.sName = mToS(enName);
    this.mName = sToM(this.sName);
    this.preMName = `${PREFIX}-${this.mName}`;
    this.lName = mToL(this.mName);
    this.fullPath = path.resolve(ROOT_Path, LIB_PATH, this.sName);
    this.libName = `@${LIB_NAME}/${this.mName}`;
  }
}
