import { defineCollection } from 'astro:content';
import { itemSchema } from '../schemas';

// 2. Define your collection(s)
const tidyCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => itemSchema(image)
});
const utensilsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => itemSchema(image)
});
const cleanCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => itemSchema(image)
});
const decorationCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => itemSchema(image)
});
const outdoorCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => itemSchema(image)
});
const stationaryCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => itemSchema(image)
});

export const collections = {
  'tidy': tidyCollection,
  'utensils': utensilsCollection,
  'clean': cleanCollection,
  'decoration': decorationCollection,
  'outdoor': outdoorCollection,
  'stationary': outdoorCollection
};
