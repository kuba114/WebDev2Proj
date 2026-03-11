import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
const posts = await getCollection('blog');
  return rss({
    title: 'Southwest Ski',
    description: 'A blog about my skiing journey in the Southwest.',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}