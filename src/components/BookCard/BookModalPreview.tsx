'use client';

import { BookRecord } from '@/intefaces';
import { modalStyle } from '@/styles/globalStyles';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import BookDetails from '../BookDetails';

type BookModalPreviewProps = {
	book: BookRecord;
	isOpen: boolean;
	handleCloseModal: () => void;
};

const BookModalPreview = ({
	handleCloseModal,
	isOpen,
	book,
}: BookModalPreviewProps) => {
	return (
		<>
			<Modal
				open={isOpen}
				onClose={handleCloseModal}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={modalStyle}>
					<BookDetails book={book} />
				</Box>
			</Modal>
		</>
	);
};

export default BookModalPreview;
