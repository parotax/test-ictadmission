import type { Entry } from '../schemas/entry'
import { Stack } from '@mui/material'

import EntriesEmptyState from './EntriesEmptyState'
import EntryCard from './EntryCard'
import EntriesLoadingState from './EntriesLoadingState'

export interface EntryListProps {
	entries: Entry[]
	isLoading?: boolean
}

const EntryList = ({ entries, isLoading }: EntryListProps) => {
	if (isLoading) {
		return <EntriesLoadingState />
	}

	if (!entries.length) {
		return <EntriesEmptyState />
	}

	return (
		<Stack spacing={2}>
			{entries.map(e => (
				<EntryCard key={e.id} entry={e} />
			))}
		</Stack>
	)
}

export default EntryList
