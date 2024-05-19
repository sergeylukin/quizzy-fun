// Import utilities from `astro:content`
import { reference, z, defineCollection } from 'astro:content'
// Define a `type` and `schema` for each collection
const questions = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    answers: z.array(
      z.object({
        title: z.string(),
        correct: z.boolean().default(false),
      })
    ),
    minAge: z.number().optional().default(0),
    pubDate: z.date(),
    topic: reference('topics'),
  }),
})

const topics = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
  }),
})

// Export a single `collections` object to register your collection(s)
export const collections = {
  questions,
  topics,
}
