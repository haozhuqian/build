export const debounce = (fn: () => void, delay: number) => {
  let timer: number;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = window.setTimeout(fn, delay);
  };
};
