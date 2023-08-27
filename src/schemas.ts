import { z } from 'astro:content';

export const itemSchema = (image) => z.object({
  title: z.string(),
  cover: image(),
  link: z.string().url().optional(),
  brand: z.string().optional(),
  description: z.string(),
  price: z.object({
    currency: z.enum(['新台幣','日圓', '美金']),
    about: z.boolean().optional(),
    number: z.number()
  }),
  year: z.number(),
  place: z.string(),
  made: z.string(),
  source: z.string().url().optional(),
  tags: z.array(z.enum(['黑貓', '白貓', '橘貓', '賓士貓', '三花貓', '虎斑貓'])).optional(),
  dateModified: z.date(),
  datePublished: z.date()
})
