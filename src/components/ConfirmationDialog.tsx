'use client';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { forwardRef } from 'react';

const Transition = forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any, any>;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

type ConfirmationDialogProps = {
	isOpen: boolean;
	handleClose: () => void;
	title: string;
	description: string;
	handleAction: () => void;
};

const ConfirmationDialog = ({
	isOpen,
	handleClose,
	description,
	title,
	handleAction,
}: ConfirmationDialogProps) => {
	return (
		<Dialog
			open={isOpen}
			TransitionComponent={Transition}
			keepMounted
			onClose={handleClose}
			aria-describedby="confirmation-dialog-description"
		>
			<DialogTitle>{title}</DialogTitle>
			<DialogContent>
				<DialogContentText id="confirmation-dialog-description" color="#3f3f3">
					{description}
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} variant="contained" color="info">
					Cancel
				</Button>
				<Button onClick={handleAction} variant="outlined" color="info">
					Ok
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default ConfirmationDialog;
