import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Profile = () => {
  const account = useSelector((state: RootState) => state.auth.account);

  return (
    <Box>
      <Typography variant="h3" component="h1">
        Profile for {account?.username}
      </Typography>
      <Typography variant="body1">
        Name: {account?.first_name} {account?.last_name}
      </Typography>
    </Box>
  );
};

export default Profile;
