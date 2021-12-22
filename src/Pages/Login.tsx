import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Link,
  Alert,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import authSlice from "../store/slices/auth";

const Login = () => {
  const [message, setMessage] = useState("");
  const [isMessageOpen, setMessageOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (username: string, password: string) => {
    axios
      .post(`/api/auth/login/`, { username, password })
      .then((res) => {
        dispatch(
          authSlice.actions.setAuthTokens({
            token: res.data.access,
            refreshToken: res.data.refresh,
          })
        );
        dispatch(authSlice.actions.setAccount(res.data.user));
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response.data.detail);
        setMessage(err.response.data.detail);
        setMessageOpen(true);
      });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setLoading(true);
    let username = data.get("username") as string;
    let password = data.get("password") as string;
    handleLogin(username, password);
    // eslint-disable-next-line no-console
    console.log({
      username: data.get("username"),
      password: data.get("password"),
    });
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Alert
        severity="error"
        sx={{ display: message === "" || !isMessageOpen ? "none" : "flex" }}
        onClose={() => {
          setMessageOpen(false);
        }}
      >
        {message}
      </Alert>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="flex-end">
            {loading ? (
              <LoadingButton
                loading
                variant="contained"
                sx={{ mb: 4, py: 1, borderRadius: 10 }}
              >
                Sign In
              </LoadingButton>
            ) : (
              <Button
                type="submit"
                variant="contained"
                sx={{ mb: 4, py: 1, borderRadius: 10 }}
              >
                Sign In
              </Button>
            )}
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="/register" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Login;
