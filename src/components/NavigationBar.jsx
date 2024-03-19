import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import { useNotification } from '../context/notificationContext';
import { MyContext } from '../context/MyContext';
import Badge from '@mui/material/Badge';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';


import { Box, Typography } from '@mui/material';


export const NavigationBar = () => {
  const { notificationcount, setNotificationCount } = useContext(MyContext);
  
  const handleNotificationicon=()=>{
    
  }
 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: '#696969' }}>  
        <Toolbar>
        <Typography variant="h6" noWrap component="a" href="/" sx={{
            flexGrow: 1,
            mr: 2,
            display: 'block', // Display as a block element
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
            '@media (max-width:600px)': {
              fontSize: '1.5rem', // Adjust font size for smaller screens
            },
          }}>
            WarSight Pro
          </Typography>
          {/* <NotificationsNoneIcon onClick={handleNotifications}/> ##121212*/}

          <Badge badgeContent={notificationcount} onClick={handleNotificationicon} color="secondary">
             <NotificationsNoneIcon />
          </Badge>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
