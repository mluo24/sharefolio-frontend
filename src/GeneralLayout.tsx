import { Box, Container } from '@mui/material';
import Footer from './Components/Footer';
import { GeneralLayoutProps } from './Types/PageProps';

const GeneralLayout = ({ children }: GeneralLayoutProps) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <Container component="main" sx={{ mt: 4, mb: 2 }} maxWidth="md">
                {children}
            </Container>
            <Footer />
        </Box>
    )
}

export default GeneralLayout;