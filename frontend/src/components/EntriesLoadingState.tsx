import { Paper, Skeleton, Stack } from '@mui/material'

const EntriesLoadingState = () => {
	return (
		<Stack spacing={2}>
			{[...Array(3)].map((_, index) => (
				<Paper key={index} variant='outlined'>
					<Stack spacing={1.25}>
						<Skeleton variant='rounded' width={120} height={18} />
						<Skeleton variant='rounded' width='70%' height={26} />
						<Skeleton variant='rounded' width='92%' height={20} />
						<Skeleton variant='rounded' width='80%' height={20} />
					</Stack>
				</Paper>
			))}
		</Stack>
	)
}

export default EntriesLoadingState
