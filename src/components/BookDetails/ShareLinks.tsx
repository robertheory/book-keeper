'use client';

import { Launch, Link } from '@mui/icons-material';
import { Button, Stack, Tooltip } from '@mui/material';
import { useSnackbar } from 'notistack';

type ShareLinksProps = {
	url: string;
};

const ShareLinks = ({ url }: ShareLinksProps) => {
	const { enqueueSnackbar } = useSnackbar();

	const handleCopyLink = () => {
		navigator.clipboard.writeText(url);

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
				<Button type="button" onClick={() => window.open(url, '_blank')}>
					<Launch color="info" />
				</Button>
			</Tooltip>
		</Stack>
	);
};

export default ShareLinks;
