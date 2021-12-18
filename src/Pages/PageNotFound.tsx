import { Box, Typography } from "@mui/material";

const PageNotFound = () => {
  return (
    <Box mt={8} sx={{ textAlign: "center" }}>
      <Typography variant="h1" gutterBottom>
        404: Not Found
      </Typography>
      <Typography variant="body1">There's nothing here!</Typography>
    </Box>
  );
};

export default PageNotFound;
