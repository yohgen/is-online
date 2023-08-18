import type { CollectionEntry } from 'astro:content';

export const textSorter = (a: CollectionEntry<'texts'>, b: CollectionEntry<'texts'>) => {
  return (
    +b.data.sticky - +a.data.sticky ||
    +(b.data.updatedAt ?? b.data.createdAt) - +(a.data.updatedAt ?? a.data.createdAt)
  );
};

export const stuffSorter = (a: CollectionEntry<'stuff'>, b: CollectionEntry<'stuff'>) => {
  return +b.data.sticky - +a.data.sticky || +b.data.date - +a.data.date;
};
