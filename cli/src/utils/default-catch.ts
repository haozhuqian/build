import { r } from './log-util';
export default (fn?: (error: Error) => void) => {
  return (error: Error) => {
    fn?.(error);
    r(error?.message);
  };
};
