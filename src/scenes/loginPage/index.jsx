import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import Form from './Form';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography fontWeight="bold" fontSize="32px" color="primary">
            POLAN AI
          </Typography>
        </Link>
      </Box>

      <Box
        width={isNonMobileScreens ? '50%' : '93%'}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: '1.5rem' }}>
          Welcome to Polan AI, the Scriptwriting tool for TV commercials!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
