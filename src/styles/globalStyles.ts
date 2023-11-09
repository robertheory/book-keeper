import { GlobalStylesProps } from '@mui/material';
import { CSSProperties } from 'react';

export const global = {
	styles: {
		'*': {
			boxSizing: 'border-box',
			webkitUserSelect: 'none',
			mozUserSelect: 'none',
			fontFamily: 'Montserrat, sans-serif',
		},
		'*:focus': {
			outline: 'none',
		},
		'*::-webkit-scrollbar': {
			width: '8px',
			height: '8px',
		},
		'*::-webkit-scrollbar-thumb': {
			background: '#c4c4c4',
			borderRadius: ' 3px',
		},
		'*::-webkit-scrollbar-thumb:hover': {
			background: '#969696',
		},
		'*::-webkit-scrollbar-track': {
			background: '#d4d4d4',
			borderRadius: '4px',
			boxShadow: 'inset 7px 10px 12px #f0f0f0',
		},
		'body,html': {
			margin: '0px',
			padding: '0px',
		},
	},
} as GlobalStylesProps;

export const modalStyle = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	bgcolor: 'background.paper',
	border: '2px solid rgba(0,0,0,0.2)',
	boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)',
	p: 4,
	width: '90%',
	maxWidth: '900px',
	maxHeight: '90%',
	height: 'fit-content',
	borderRadius: '1rem',
	overflow: 'auto',
} as CSSProperties;
