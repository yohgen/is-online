import { defineCollection, z as zod } from 'astro:content';

import { getFromDate } from '~/shared/server';
import { FULL_TITLE } from '!config';

const MIN = 3;

const texts = defineCollection({
  schema: zod.object({
    title: zod.string().min(MIN),
    description: zod.string().min(MIN),
    sticky: zod.boolean().default(false),
    image: zod.string().min(MIN),
    imageAlt: zod.string().min(MIN),
    author: zod.string().default(FULL_TITLE),
    ogTitle: zod.string().min(MIN).optional(),
    createdAt: zod.string().or(zod.date()).transform(getFromDate),
    updatedAt: zod
      .string()
      .or(zod.date())
      .optional()
      .transform((value) => value && getFromDate(value)),
    section: zod.string(),
    tags: zod.array(zod.string()).default([]),
  }),
});

const stuff = defineCollection({
  type: 'data',
  schema: zod.object({
    title: zod.string().min(MIN),
    description: zod.string().min(MIN),
    sticky: zod.boolean().default(false),
    link: zod.string().min(MIN),
    tag: zod.enum(['code', 'article', 'link', 'video']),
    date: zod.string().or(zod.date()).transform(getFromDate),
  }),
});

export const collections = { texts, stuff };
