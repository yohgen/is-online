import type { URL } from 'node:url';
import { basename, extname } from 'node:path';

export const getBasename = (path: string | URL) => {
  const pathname = typeof path === 'string' ? path : path.pathname;
  return basename(pathname, extname(pathname)) || null;
};
