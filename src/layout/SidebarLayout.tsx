import { Drawer, List, ListItemButton, ListItemText, Toolbar, Box, Typography } from '@mui/material';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import theme from '../styles/theme';
import { Footer } from '../components';
import type React from 'react';

const menuItems = [
  { text: 'Company Profile', route: '/company-profile' },
  { text: 'User Profile', route: '/user-profile' },
  { text: 'Banking Information', route: '/banking-info' },
  { text: 'Documents', route: '/documents' },
  { text: 'Logout', route: '/login' },
];

const SidebarLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getLocationName = (path: string) => {
    const pathParts = path.split('/').filter(Boolean);
    const lastPart = pathParts[pathParts.length - 1];
    const item = menuItems.find((item) => item.route === `/${lastPart}`);
    return item ? item.text : 'Dashboard';
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
        }}
      >
        <Toolbar>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, fontSize: theme.typography.h6.fontSize, fontWeight: 600 }}>
                Menu
            </Typography>
        </Toolbar>
        <List>
          {menuItems.map((item) => (
            <ListItemButton
              key={item.text}
              selected={location.pathname === item.route}
              onClick={() => navigate(item.route)}
            >
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, minHeight: '100vh', backgroundColor: theme.palette.background.default }}>
        <Toolbar 
            sx={{
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.primary.contrastText,
                }}>
            <Typography variant="h6" noWrap component="h1" sx={{ flexGrow: 1, fontSize: theme.typography.h6.fontSize, fontWeight: 600 }}>
                {
                    getLocationName(location.pathname)
                }
            </Typography>
        </Toolbar>
        <Outlet />
        <Footer />
      </Box>
    </Box>
  );
};

export default SidebarLayout;
