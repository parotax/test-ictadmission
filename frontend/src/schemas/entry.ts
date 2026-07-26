import { z } from 'zod'

export const entrySchema = z.object({
	id: z.string().min(1),
	title: z.string().trim().min(1, 'Title is required'),
	body: z.string().trim().min(1, 'Body is required'),
	isoTime: z.string(),
	lat: z.number().nullish(),
	lon: z.number().nullish(),
})
export type Entry = z.infer<typeof entrySchema>

export const entryInputSchema = entrySchema.omit({ id: true, isoTime: true })
export type EntryInput = z.infer<typeof entryInputSchema>
