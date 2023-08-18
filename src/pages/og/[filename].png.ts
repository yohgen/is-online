import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

import { collectGlobFiles, genOgImage, getBasename } from '~/shared/server';

type Comp = { title: string; ogTitle?: string };

export const getStaticPaths = async () => {
  const texts = await getCollection('texts');
  const textPaths = texts.map((text) => ({
    params: { filename: text.slug },
    props: { text: text.data.ogTitle || text.data.title },
  }));

  const compGlobDict = import.meta.glob<Comp>('../*.astro');
  const comps = await collectGlobFiles(compGlobDict);

  const compPaths = comps.map(({ filename, file }) => ({
    params: { filename: getBasename(filename) },
    props: { text: file.ogTitle || file.title },
  }));

  return [...compPaths, ...textPaths];
};

export const get: APIRoute = async ({ props }) => {
  const image = await genOgImage(props.text);
  if (!image) throw new Error('Should not happen');
  return { body: image, encoding: 'utf-8' };
};
