/**
 * 将首字母转为大写
 */
export const FirstUpper = (str: string): string => {
  return `${str.substring(0, 1).toUpperCase()}${str.substring(1)}`;
};
/**
 * 将首字母转为小写
 */
export const FirstLower = (str: string): string => {
  return `${str.substring(0, 1).toLowerCase()}${str.substring(1)}`;
};
/**
 * 小驼峰命名转为中划线命名
 */
export const sToM = (str: string): string => {
  return FirstLower(str)
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase();
};
/**
 * 中划线命名转为大驼峰命名
 */
export const mToL = (str: string): string => {
  let ret = '';
  const list = str.split('-');
  list.forEach((item) => {
    ret += FirstUpper(item);
  });
  return FirstUpper(ret);
};
/**
 * 中划线命名转为小驼峰命名
 */
export const mToS = (componentName: string): string => {
  return FirstLower(mToL(componentName));
};
