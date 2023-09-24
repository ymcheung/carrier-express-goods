import { defineCollection } from 'astro:content';
import { itemSchema } from '../schemas';

const tidyCollection = defineCollection({
  type: 'content',
  schema: itemSchema
});
const utensilsCollection = defineCollection({
  type: 'content',
  schema: itemSchema
});
// const cleanCollection = defineCollection({
//   type: 'content',
//   schema: itemSchema
// });
const decorationCollection = defineCollection({
  type: 'content',
  schema: itemSchema
});
const outdoorCollection = defineCollection({
  type: 'content',
  schema: itemSchema
});
const stationaryCollection = defineCollection({
  type: 'content',
  schema: itemSchema
});

export const collections = {
  'tidy': tidyCollection,
  'utensils': utensilsCollection,
  // 'clean': cleanCollection,
  'decoration': decorationCollection,
  'outdoor': outdoorCollection,
  'stationary': stationaryCollection
};
