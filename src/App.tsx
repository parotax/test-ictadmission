import React, { useState } from 'react'
import { Box, Container } from '@mui/material'

import AppHeader from './components/AppHeader'
import EntriesSection from './components/EntriesSection'
import NewEntryModal from './components/NewEntryModal'
import useEntries from './hooks/useEntries'
import type { EntryInput } from './schemas/entry'

const App: React.FC = () => {
	const { entries, loading, addEntry } = useEntries()
	const [showModal, setShowModal] = useState(false)

	const handleAdd = (entry: EntryInput) => {
		addEntry(entry)
		setShowModal(false)
	}

	return (
		<Box
			sx={{
				minHeight: '100vh',
				position: 'relative',
				overflow: 'hidden',
				backgroundColor: '#060b14',
			}}
		>
			<AppHeader onAddClick={() => setShowModal(true)} />

			<Container maxWidth='lg' sx={{ position: 'relative', zIndex: 1, py: { xs: 2.5, md: 4 } }}>
				<EntriesSection entries={entries} isLoading={loading} />
			</Container>

			{showModal && <NewEntryModal onAdd={handleAdd} onClose={() => setShowModal(false)} />}
		</Box>
	)
}

export default App
