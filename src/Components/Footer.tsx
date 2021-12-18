import { Box, Container, Typography } from "@mui/material";

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      Sharefolio {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: "auto",
      }}
    >
      <Container maxWidth="md">
        <Copyright />
      </Container>
    </Box>
  );
};

export default Footer;
