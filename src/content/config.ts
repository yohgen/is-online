import { defineCollection, z } from 'astro:content';

import { CREATOR } from 'consts';

const posts = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		creator: z.string().default(CREATOR),
		createdAt: z
			.string()
			.or(z.date())
			.transform((value) => new Date(value)),
		updatedAt: z
			.string()
			.or(z.date())
			.optional()
			.transform((value) => value ? new Date(value) : undefined),
		section: z.string(),
		tags: z.array(z.string()).optional(),
		image: z.object({
			src: z.string(),
			alt: z.string(),
		}).optional(),
	}),
});

export const collections = { posts };
