import fs from 'fs';
export default async (
  path: fs.PathLike,
  rejectFn?: (
    resolve: (value: unknown) => void,
    reject: (reason: any) => void,
  ) => void,
) => {
  if (fs.existsSync(path)) {
    if (rejectFn) {
      return new Promise((resolve, reject) => {
        rejectFn(resolve, reject);
      });
    } else {
      return false;
    }
  } else {
    await fs.promises.mkdir(path).catch((err) => {
      throw err;
    });
    return true;
  }
};
