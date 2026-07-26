import AddRoundedIcon from '@mui/icons-material/AddRounded'
import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material'

export interface AppHeaderProps {
	onAddClick: () => void
}

const AppHeader = ({ onAddClick }: AppHeaderProps) => {
	return (
		<AppBar position='sticky'>
			<Toolbar>
				<Container
					maxWidth='lg'
					disableGutters
					sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}
				>
					<Typography variant='h6'>Unit Logbook</Typography>

					<Button
						onClick={onAddClick}
						variant='outlined'
						startIcon={<AddRoundedIcon />}
						sx={{
							alignSelf: 'center',
							px: 2,
							py: 1,
							color: 'text.primary',
							borderColor: 'rgba(148, 163, 184, 0.22)',
							'&:hover': {
								borderColor: 'rgba(148, 163, 184, 0.36)',
								backgroundColor: 'rgba(148, 163, 184, 0.08)',
							},
						}}
					>
						New entry
					</Button>
				</Container>
			</Toolbar>
		</AppBar>
	)
}

export default AppHeader
