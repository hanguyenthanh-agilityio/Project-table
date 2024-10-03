/* eslint-disable @typescript-eslint/no-explicit-any */
export const useDebounce = (func: any) => {
  let timer: any;
  return (...args: any) => {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      func.apply(context, args);
    }, 1000);
  };
};
