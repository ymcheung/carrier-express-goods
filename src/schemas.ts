import { z } from "astro:content";

export const itemSchema = z.object({
  title: z.string(),
  link: z.string().url().optional(),
  brand: z.string().optional(),
  description: z.string(),
  price: z.object({
    currency: z.enum(["twd", "jpy", "usd"]).optional(),
    about: z.boolean().optional(),
    number: z.number().optional(),
  }),
  year: z.object({
    number: z.number(),
    before: z.boolean().optional(),
  }),
  place: z.string(),
  made: z.string().optional(),
  source: z.string().url().optional(),
  tags: z
    .array(
      z.enum(["黑貓", "白貓", "橘貓", "賓士貓", "乳牛貓", "三花貓", "虎斑貓"]),
    )
    .optional(),
  dateModified: z.date(),
  datePublished: z.date(),
});
