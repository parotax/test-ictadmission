import type { Entry } from '../schemas/entry'

export const sortEntries = (entries: Entry[]) =>
	entries.slice().sort((a, b) => (a.isoTime < b.isoTime ? 1 : -1))
