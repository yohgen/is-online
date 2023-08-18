export type GlobDict<T = any> = {
  [key: string]: () => Promise<T>;
};

export const collectGlobFiles = <T = any>(
  dict: GlobDict<T>
): Promise<{ filename: string; file: T }[]> =>
  Promise.all(
    Object.entries(dict).map(async ([filename, fileGetter]) => ({
      filename,
      file: await fileGetter(),
    }))
  );
