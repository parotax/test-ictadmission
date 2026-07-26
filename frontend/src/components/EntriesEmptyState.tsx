import { Alert, Typography } from '@mui/material'

const EntriesEmptyState = () => {
	return (
		<Alert
			severity='info'
			variant='outlined'
			sx={{
				borderColor: 'rgba(148, 163, 184, 0.18)',
				backgroundColor: 'rgba(255, 255, 255, 0.02)',
			}}
		>
			<Typography variant='body1'>No entries.</Typography>
			<Typography variant='body2'>Add an entry to start the log.</Typography>
		</Alert>
	)
}

export default EntriesEmptyState
