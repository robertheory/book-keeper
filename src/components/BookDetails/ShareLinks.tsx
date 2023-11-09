'use client';

import { siteURL } from '@/data/constants';
import { Launch, Link } from '@mui/icons-material';
import { Button, Stack, Tooltip } from '@mui/material';
import { useSnackbar } from 'notistack';

type ShareLinksProps = {
	bookId: string;
};

const ShareLinks = ({ bookId }: ShareLinksProps) => {
	const { enqueueSnackbar } = useSnackbar();

	const shareURL = `${siteURL}/book/${bookId}`;
	console.log('shareURL', shareURL);

	const handleCopyLink = () => {
		navigator.clipboard.writeText(shareURL);

		enqueueSnackbar('Link copied to clipboard', {
			variant: 'info',
		});
	};

	return (
		<Stack
			width="100%"
			direction="row"
			justifyContent="center"
			alignItems="center"
			gap={2}
		>
			<Tooltip title="Copy link to clipboard" placement="bottom">
				<Button type="button" onClick={() => handleCopyLink()}>
					<Link color="info" />
				</Button>
			</Tooltip>

			<Tooltip title="Open in a new window" placement="bottom">
				<Button type="button" onClick={() => window.open(shareURL, '_blank')}>
					<Launch color="info" />
				</Button>
			</Tooltip>
		</Stack>
	);
};

export default ShareLinks;
