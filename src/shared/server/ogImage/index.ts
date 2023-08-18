import { join } from 'node:path';
import { readFile } from 'node:fs/promises';
import satori from 'satori';
import sharp from 'sharp';

import { OG } from '!config';

import { template } from './template';
import fontPathInterBold from './Inter-Bold.ttf';

const { PROD, ROOT_DIR } = import.meta.env;

const DIST_DIR = join(ROOT_DIR, '/dist/');

const fontPathFullInterBold = join(DIST_DIR, fontPathInterBold);

const { width, height, type } = OG;

export const genOgImage = async (text: string) => {
  if (!PROD) return null;

  const fontInterBold = await readFile(fontPathFullInterBold);
  const fontEntryInterBold = {
    name: 'Inter',
    weight: 700 as const,
    data: fontInterBold,
  };

  const imageString = await satori(template(text), {
    width,
    height,
    embedFont: true,
    fonts: [fontEntryInterBold],
  });

  return sharp(Buffer.from(imageString))
    .toFormat(type as any)
    .toBuffer();
};
