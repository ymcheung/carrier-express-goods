import { defineCollection } from 'astro:content';
import { itemSchema } from '../schemas';

// 2. Define your collection(s)
const tidyCollection = defineCollection({
  type: 'content',
  schema: itemSchema
});
const utensilsCollection = defineCollection({
  type: 'content',
  schema: itemSchema
});
const cleanCollection = defineCollection({
  type: 'content',
  schema: itemSchema
});

export const collections = {
  'tidy': tidyCollection,
  'utensils': utensilsCollection,
  'clean': cleanCollection,
};
