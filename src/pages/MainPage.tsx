import {
  AppBar,
  Box,
  Button,
  Container,
  Paper,
  Toolbar,
  Typography,
} from '@mui/material';
import { LogOut } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

function MainPage() {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Main Page
          </Typography>
          <Button
            color="inherit"
            onClick={handleLogout}
            startIcon={<LogOut size={20} />}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom>
            Welcome to Main Page
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

export default MainPage;
