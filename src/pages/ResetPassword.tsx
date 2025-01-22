import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, TimerReset as KeyReset, ArrowLeft } from 'lucide-react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  InputAdornment,
  Link,
  Alert,
} from '@mui/material';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Password reset requested for:', email);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(to bottom right, #e8eaf6, #c5cae9)',
        py: 4,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={8}
          sx={{
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <KeyReset size={48} color="#3f51b5" />
          <Typography
            component="h1"
            variant="h4"
            sx={{ mt: 2, fontWeight: 'bold' }}
          >
            Reset Password
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 1, textAlign: 'center' }}
          >
            Enter your email address and we'll send you instructions to reset
            your password
          </Typography>

          {submitted ? (
            <Box sx={{ width: '100%', mt: 3 }}>
              <Alert severity="success" sx={{ mb: 3 }}>
                If an account exists with {email}, you will receive password
                reset instructions.
              </Alert>
              <Button
                fullWidth
                variant="contained"
                onClick={() => navigate('/sign-in')}
                startIcon={<ArrowLeft size={20} />}
                sx={{ mt: 2, py: 1.5 }}
              >
                Back to Sign In
              </Button>
            </Box>
          ) : (
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ mt: 4, width: '100%' }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={e => setEmail(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Mail size={20} />
                    </InputAdornment>
                  ),
                }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, py: 1.5 }}
              >
                Send Reset Instructions
              </Button>

              <Box sx={{ textAlign: 'center', mt: 2 }}>
                <Link
                  component="button"
                  variant="body2"
                  onClick={() => navigate('/sign-in')}
                  sx={{ display: 'inline-flex', alignItems: 'center', gap: 1 }}
                  underline="hover"
                >
                  <ArrowLeft size={16} />
                  Back to Sign In
                </Link>
              </Box>
            </Box>
          )}
        </Paper>
      </Container>
    </Box>
  );
}

export default ForgotPassword;
