import { Box, Typography } from '@mui/material'

export interface EntryCoordinatesProps {
	latitude?: number | null
	longitude?: number | null
}

const coordinateBoxSx = {
	p: 1.5,
	borderRadius: 2,
	border: '1px solid rgba(148, 163, 184, 0.12)',
	background: 'rgba(255, 255, 255, 0.02)',
}

const EntryCoordinates = ({ latitude, longitude }: EntryCoordinatesProps) => {
	return (
		<Box
			sx={{
				display: 'grid',
				gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
				gap: 1.5,
			}}
		>
			<Box sx={coordinateBoxSx}>
				<Typography variant='overline'>Latitude</Typography>

				<Typography variant='body2'>{latitude ?? '-'}</Typography>
			</Box>

			<Box sx={coordinateBoxSx}>
				<Typography variant='overline'>Longitude</Typography>

				<Typography variant='body2'>{longitude ?? '-'}</Typography>
			</Box>
		</Box>
	)
}

export default EntryCoordinates
