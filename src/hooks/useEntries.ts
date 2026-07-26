import { useCallback, useEffect, useState } from 'react'
import z from 'zod'

import { entrySchema } from '../schemas/entry'
import { sortEntries } from '../utils/sortEntries'
import type { Entry, EntryInput } from '../schemas/entry'

const useEntries = () => {
	const [entries, setEntries] = useState<Entry[]>([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setIsLoading(true)

		fetch('/data.json')
			.then(async response => {
				const payload = await response.json()
				const parsed = z.array(entrySchema).safeParse(payload)

				if (!parsed.success) {
					setEntries([])
					return
				}

				setEntries(sortEntries(parsed.data))
			})
			.finally(() => setIsLoading(false))
	}, [])

	const addEntry = useCallback((e: EntryInput) => {
		const now = new Date().toISOString()
		const newEntry: Entry = {
			id: Date.now().toString(),
			isoTime: now,
			...e,
		}
		setEntries(prev => sortEntries([newEntry, ...prev]))
	}, [])

	return { entries, loading: isLoading, addEntry }
}

export default useEntries
