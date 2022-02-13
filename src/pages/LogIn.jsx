import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import BeatLoader from "react-spinners/BeatLoader";

const theme = createTheme();

export default function LogIn(props) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    getDeviceUuid(email, password);
  };

  async function getDeviceUuid(email, password) {
    try {
      const response = await axios.get("deviceuid");
      const deviceUuid = response.data.result.deviceUuid;
      postCredentials(deviceUuid, email, password);
    } catch (error) {
      console.error(error);
    }
  }
  async function postCredentials(deviceUuid, email, password) {
    setLoading(true);
    axios
      .post("login-buyer", {
        auth: {
          email: `${email}`,
          deviceUuid: `${deviceUuid}`,
        },
        password: `${password}`,
      })
      .then(function (response) {
        const token = response.data.result.token;
        localStorage.setItem("token", token);
        const msg = response.data.message;
        if (msg === "SUCCESS") {
          props.history.push("/dashboard");
          setLoading(false);
        } else {
          console.log(msg);
          setError(msg);
          setAlert(true);
          setLoading(false);
        }
      })
      .catch(function (error) {
        console.log(error);
        setAlert(true);
        setLoading(false);
      });
  }
  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        {loading ? (
          <div style={{ marginTop: "40vh", paddingLeft: "5vw" }}>
            <BeatLoader color={"#04896A"} loading={loading} size={50} />
          </div>
        ) : (
          <Box
            style={{
              marginTop: "20vh",
              border: "1px solid grey",
              padding: "50px",
              paddingTop: "80px",
              paddingBottom: "80px",
              borderRadius: "5px",
            }}
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <Typography component='h1' variant='h5'>
              LOGIN
            </Typography>
            <Box
              component='form'
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}>
              <TextField
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                autoFocus
              />
              <TextField
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
              />
              {alert ? (
                <Stack sx={{ width: "100%" }} spacing={2}>
                  <Alert severity='error'>
                    Login Failed: Your user ID or password is incorrect
                  </Alert>
                </Stack>
              ) : (
                <div></div>
              )}

              <Button
                style={{ backgroundColor: "#04896A" }}
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}>
                LOGIN
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href='#' variant='body2'>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href='/sign-up' variant='body2'>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        )}
      </Container>
    </ThemeProvider>
  );
}
