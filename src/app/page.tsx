import { Stack } from '@mui/material';
import Button from '@mui/material/Button';

const Home = () => {
	return (
		<Stack
			direction="column"
			gap={4}
			width="100vw"
			height="100vh"
			justifyContent="center"
			alignItems="center"
		>
			<Button variant="contained">START</Button>
		</Stack>
	);
};

export default Home;
