import { Box, Container } from "@mui/material";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

const GeneralLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Container component="main" sx={{ mt: 4, mb: 2 }} maxWidth="md">
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
};

export default GeneralLayout;
