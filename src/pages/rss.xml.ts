import rss from '@astrojs/rss';
// import { getCollection } from 'astro:content';
import { TITLE, DESCRIPTION } from 'consts';

export const get = async (context: any) => {
	// const posts = await getCollection('blog');
	
	return rss({
		title: TITLE,
		description: DESCRIPTION,
		site: context.site,
		items: [{
			title: TITLE,
			pubDate: new Date(),
			link: '/',
		}],
		// items: posts.map((post) => ({
		// 	...post.data,
		// 	link: `/blog/${post.slug}/`,
		// })),
	});
};
