import { useState } from 'react'
import {
	Alert,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Box,
	Stack,
	TextField,
	Typography,
} from '@mui/material'
import DoneRoundedIcon from '@mui/icons-material/DoneRounded'

import type { EntryInput } from '../schemas/entry'
import { entryInputSchema } from '../schemas/entry'

const NewEntryModal = ({
	onAdd,
	onClose,
}: {
	onAdd: (e: EntryInput) => void
	onClose: () => void
}) => {
	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')
	const [lat, setLat] = useState<string>('')
	const [lon, setLon] = useState<string>('')
	const [error, setError] = useState<string | null>(null)
	const resetForm = () => {
		setTitle('')
		setBody('')
		setLat('')
		setLon('')
		setError(null)
	}

	const submit = (e: React.FormEvent) => {
		e.preventDefault()
		const parsed = entryInputSchema.safeParse({
			title,
			body,
			lat: lat ? Number(lat) : null,
			lon: lon ? Number(lon) : null,
		})

		if (!parsed.success) {
			setError(parsed.error.issues.map(issue => issue.message).join('. '))
			return
		}

		resetForm()
		onAdd(parsed.data)
	}

	return (
		<Dialog
			open
			onClose={onClose}
			fullWidth
			maxWidth='sm'
			slotProps={{
				paper: {
					sx: {
						backgroundColor: 'rgba(11, 17, 30, 0.98)',
						backdropFilter: 'none',
					},
				},
			}}
		>
			<DialogTitle sx={{ pb: 1.5 }}>
				<Stack spacing={1}>
					<Typography variant='h2'>Add entry</Typography>
				</Stack>
			</DialogTitle>

			<DialogContent dividers>
				<form id='new-entry-form' onSubmit={submit}>
					<Stack spacing={2.5} sx={{ pt: 1 }}>
						<TextField
							label='Title'
							value={title}
							onChange={e => setTitle(e.target.value)}
							required
							placeholder='Title'
							fullWidth
						/>

						<TextField
							label='Body'
							value={body}
							onChange={e => setBody(e.target.value)}
							required
							placeholder='Entry details'
							fullWidth
							multiline
							minRows={6}
						/>

						<Box
							sx={{
								display: 'grid',
								gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
								gap: 2,
							}}
						>
							<Box>
								<TextField
									label='Latitude (optional)'
									value={lat}
									onChange={e => setLat(e.target.value)}
									placeholder='60.15'
									fullWidth
									type='number'
									slotProps={{ htmlInput: { step: 'any' } }}
								/>
							</Box>

							<Box>
								<TextField
									label='Longitude (optional)'
									value={lon}
									onChange={e => setLon(e.target.value)}
									placeholder='25.03'
									fullWidth
									type='number'
									slotProps={{ htmlInput: { step: 'any' } }}
								/>
							</Box>
						</Box>

						{error ? <Alert severity='error'>{error}</Alert> : null}
					</Stack>
				</form>
			</DialogContent>

			<DialogActions sx={{ px: 3, py: 2.25 }}>
				<Button
					type='submit'
					form='new-entry-form'
					variant='contained'
					startIcon={<DoneRoundedIcon />}
					sx={{
						backgroundColor: 'rgba(148, 163, 184, 0.12)',
						color: 'text.primary',
						border: '1px solid rgba(148, 163, 184, 0.16)',
						'&:hover': {
							backgroundColor: 'rgba(148, 163, 184, 0.18)',
						},
					}}
				>
					Add entry
				</Button>
			</DialogActions>
		</Dialog>
	)
}

export default NewEntryModal
