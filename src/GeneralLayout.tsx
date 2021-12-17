import { Box, Container } from "@mui/material";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";

const GeneralLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Container component="main" sx={{ mt: 4, mb: 2 }} maxWidth="md">
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
};

export default GeneralLayout;
