import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';
import React from 'react';
import theme from '../../styles/theme';
import invoixLogo from '../../assets/invoix.png';
const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    // navigate to home page
    navigate('/company-profile');
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        size={{ sm: 8, md: 5 }}
        sx={{
          backgroundColor: theme.palette.primary.main,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          py: 8,
          px: 8,
        }}
      >
        <Box
          sx={{
            alignSelf: 'center',
            mb: 4,
            width: '100%',
          }}
        >
          <Typography variant="h1" sx={{ color: theme.palette.secondary.main }}>
            Invoix <sup>TM</sup>
          </Typography>
        </Box>
        <Typography component="h1" variant="h4" sx={{ color: theme.palette.primary.contrastText }}>
          Your Marketplace for
        </Typography>
        <Typography component="h1" variant="h4" sx={{ color: theme.palette.text.secondary }}>
          Invoice Financing
        </Typography>
        <Box
          component="img"
          sx={{
            alignSelf: 'center',
            mt: 8,
            width: '100%',
          }}
          src={invoixLogo}
        />
      </Grid>

      <Grid 
        size={{ xs: 12, sm: 4, md: 7 }}
        component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: theme.palette.secondary.main }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: theme.palette.secondary.main,
                color: '#fff !important',
                '&:hover': {
                  backgroundColor: theme.palette.secondary.dark,
                },
              }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Login;