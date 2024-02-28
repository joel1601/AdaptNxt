import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleToggle}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={handleClose}
      >
        <List>
          {/* Use Link instead of ListItem for navigation */}
          <ListItem button component={Link} to="/dashboard">
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component={Link} to="/inventory">
            <ListItemText primary="Inventory" />
          </ListItem>
          <ListItem button component={Link} to="/order"> {/* Navigate to /orders */}
            <ListItemText primary="Orders" />
          </ListItem>
          <ListItem button component={Link} to="/shipping">
            <ListItemText primary="Shipping" />
          </ListItem>
          <ListItem button component={Link} to="/channel">
            <ListItemText primary="Channel" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
