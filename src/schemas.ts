import { z } from 'zod';

export const categorySchema = z.object({
  title: z.string(),
  slug: z.object({
    current: z.string()
  }),
})

export const postSchema = z.object({
  cover: z.object({
    asset: z.object({
      url: z.string()
    })
  }),
  title: z.string(),
  slug: z.object({
    current: z.string()
  }),
  links: z.array(
    z.object({
      title: z.string(),
      href: z.string().url()
    })
  ).optional(),
  brand: z.string().optional(),
  content: z.string(),
  description: z.string(),
  category: z.object({
    title: z.string(),
    slug: z.object({
      current: z.string()
    })
  }),
  price: z.object({
    currency: z.object({ name: z.enum(['twd', 'jpy', 'usd'])}),
    about: z.boolean(),
    amount: z.number()
  }).optional(),
  acquired: z.object({
    year: z.date().optional(),
    place: z.string().optional(),
    before: z.boolean().optional()
  }),
  made: z.string().optional(),
  // tags: z
  //   .array(
  //     z.enum(['黑貓', '白貓', '橘貓', '賓士貓', '乳牛貓', '三花貓', '虎斑貓'])
  //   )
  //   .optional(),
  tags: z.array(
    z.object({
      name: z.string(),
      title: z.string(),
      position: z.number()
    })
  ).optional(),
  _updatedAt: z.string().datetime({ offset: true }),
  _createdAt: z.string().datetime({ offset: true }),
  views: z.number(),
  likes: z.number()
});
