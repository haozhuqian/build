export type InferDefaults<T> = { [K in keyof T]?: InferDefault<T, T[K]> };
export type InferDefault<P, T> =
  // eslint-disable-next-line
  ((props: P) => T & {}) | (T extends NativeType ? T : never);
// eslint-disable-next-line
export type NativeType = null | number | string | boolean | symbol | Function;
