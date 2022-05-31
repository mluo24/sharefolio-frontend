import {Box, Typography, Grid, TextField, Button, Link} from "@mui/material";
import {FormEvent} from "react";
import axios from "axios";
import authSlice from "../store/slices/auth";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const Register = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    axios.post('/api/auth/register/', {
      username: data.get('username'),
      password: data.get('password'),
      email: data.get('email'),
      first_name: data.get('firstName'),
      last_name: data.get('lastName'),
    })
      .then((res) => {
        dispatch(
          authSlice.actions.setAuthTokens({
            token: res.data.access,
            refreshToken: res.data.refresh,
          })
        );
        dispatch(authSlice.actions.setAccount(res.data.user))
        navigate("/")
      })
      .catch((err) => {
        console.log(err)
      })
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
        Sign up
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="First Name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="family-name"
            />
          </Grid>
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
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
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
              autoComplete="new-password"
            />
          </Grid>
          <Grid xs={12} sm={8} item>
            <Link href="/login" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
          <Grid xs={12} sm={4} item display="flex" justifyContent="flex-end">
            <Button
              type="submit"
              variant="contained"
              sx={{py: 1, borderRadius: 10}}
            >
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Register;
