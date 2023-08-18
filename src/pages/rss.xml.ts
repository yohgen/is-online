import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';

import { stuffSorter, textSorter } from '~/shared/server';
import { FULL_TITLE, TITLE } from '!config';

export const get: APIRoute = async ({ site }) => {
  const texts = (await getCollection('texts')).sort(textSorter);
  const stuff = (await getCollection('stuff')).sort(stuffSorter);

  const textItems = texts.map(({ slug, data }) => ({
    title: data.title,
    description: data.description,
    author: data.author,
    link: `/text/${slug}`,
    pubDate: data.createdAt,
    categories: [data.section, ...data.tags],
  }));
  const stuffItems = stuff.map(({ data }) => ({
    title: data.title,
    description: data.description,
    author: FULL_TITLE,
    link: '/stuff',
    pubDate: data.date,
    categories: [data.tag],
  }));

  return rss({
    title: `RSS | ${TITLE}`,
    description: 'Stash of forbidden knowledge',
    site: site!.href,
    stylesheet: '/rss.xsl',
    items: [...textItems, ...stuffItems],
  });
};
