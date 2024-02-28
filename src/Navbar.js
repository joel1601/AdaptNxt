// Navbar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Sidebar from './Sidebar'; 
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import ListItemIcon from '@mui/material/ListItemIcon';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import ListItem from '@mui/material/ListItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Sidebar />
            <Typography variant="h6" component="div">
              adaptnxt
            </Typography>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', cursor:'pointer' }}>
            {/* List items for icons */}
            <ListItem button>
              <ListItemIcon>
                <Brightness4Icon />
              </ListItemIcon>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <NotificationsIcon />
              </ListItemIcon>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <LanguageIcon />
              </ListItemIcon>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
            </ListItem>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
