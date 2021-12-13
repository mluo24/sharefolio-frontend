import './App.css';
import { Box, Container, Typography } from '@mui/material';
import Footer from './Components/Footer';

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Container component="main" sx={{ mt: 4, mb: 2 }} maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome!
        </Typography>
        <Typography variant="body1">
          This is Sharefolio!
        </Typography>
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
