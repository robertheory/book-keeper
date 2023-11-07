import { CircularProgress, Stack } from '@mui/material';

const Loading = () => (
	<Stack
		direction="column"
		gap={4}
		width="100%"
		height="80vh"
		justifyContent="center"
		alignItems="center"
		p={4}
	>
		<CircularProgress />
	</Stack>
);

export default Loading;
