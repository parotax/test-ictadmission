import { createTheme } from '@mui/material'

export const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#94a3b8',
		},
		secondary: {
			main: '#64748b',
		},
		background: {
			default: '#060b14',
			paper: 'rgba(11, 17, 30, 0.94)',
		},
		text: {
			primary: '#f8fafc',
			secondary: '#cbd5e1',
		},
	},
	shape: {
		borderRadius: 14,
	},
	typography: {
		fontFamily: '"Manrope", "Segoe UI", sans-serif',
		h1: {
			fontWeight: 700,
		},
		h2: {
			fontWeight: 700,
			fontSize: '1.8rem',
			marginTop: '0.5rem',
			marginBottom: '2rem',
		},
		h3: {
			fontWeight: 600,
			fontSize: '1.4rem',
		},
		h6: {
			fontWeight: 800,
			letterSpacing: 0.2,
		},
		body1: {
			mt: 1.5,
			color: 'text.secondary',
		},
		body2: {
			color: 'text.primary',
			fontWeight: 700,
			mt: 0.25,
		},
		overline: {
			color: 'text.secondary',
			letterSpacing: 1.5,
		},
		button: {
			textTransform: 'none',
			fontWeight: 700,
		},
	},
	components: {
		MuiPaper: {
			styleOverrides: {
				root: ({ theme }) => ({
					padding: theme.spacing(2.25),
					[theme.breakpoints.up('md')]: {
						padding: theme.spacing(2.75),
					},
					border: '1px solid rgba(148, 163, 184, 0.12)',
					backgroundImage: 'none',
				}),
			},
		},
		MuiDivider: {
			styleOverrides: {
				root: ({ theme }) => ({
					marginTop: theme.spacing(2),
					marginBottom: theme.spacing(2),
					borderColor: 'rgba(148, 163, 184, 0.12)',
				}),
			},
		},
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					backgroundColor: '#060b14',
				},
				'*::selection': {
					backgroundColor: 'rgba(148, 163, 184, 0.32)',
					color: '#ffffff',
				},
			},
		},
	},
})
