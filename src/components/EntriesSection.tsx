import { Paper, Typography } from '@mui/material'

import EntryList from './EntryList'
import type { Entry } from '../schemas/entry'

export interface EntriesSectionProps {
	entries: Entry[]
	isLoading?: boolean
}

const EntriesSection = ({ entries, isLoading }: EntriesSectionProps) => {
	return (
		<Paper>
			<Typography variant='h2'>Entries</Typography>

			<EntryList entries={entries} isLoading={isLoading} />
		</Paper>
	)
}

export default EntriesSection
