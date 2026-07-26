import { Box, Card, Divider, Typography } from '@mui/material'
import dayjs from 'dayjs'
import 'dayjs/locale/fi'

import EntryCoordinates from './EntryCoordinates'
import type { Entry } from '../schemas/entry'

export interface EntryCardProps {
	entry: Entry
}

const EntryCard = ({ entry }: EntryCardProps) => {
	const hasCoordinates = entry.lat != null || entry.lon != null
	const formattedTimestamp = dayjs(entry.isoTime).locale('fi').format('DD.MM.YYYY HH:mm')

	return (
		<Card
			sx={{
				transition: 'border-color 180ms ease',
				'&:hover': {
					borderColor: 'rgba(148, 163, 184, 0.22)',
				},
			}}
		>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'flex-start',
					gap: 2,
				}}
			>
				<Typography variant='h3'>{entry.title}</Typography>

				<Box sx={{ textAlign: 'right' }}>
					<Typography component='time' dateTime={entry.isoTime} variant='body2'>
						{formattedTimestamp}
					</Typography>
				</Box>
			</Box>

			<Typography variant='body1'>{entry.body}</Typography>

			{hasCoordinates ? (
				<>
					<Divider />
					<EntryCoordinates latitude={entry.lat} longitude={entry.lon} />
				</>
			) : null}
		</Card>
	)
}

export default EntryCard
