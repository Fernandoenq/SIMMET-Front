import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import {Link} from 'react-router-dom'
import { makeStyles } from '@mui/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChangePage from '../API/functions/changePage'

const useStyle = makeStyles(theme => ({
  link:{
    color: theme.palette.text.primary,
    textDecoration: 'none',
    width: '100%'
  },
  fundo:{
    backgroundColor: '#155FA0',
  }
}))

export default function LoginMenu() {

  const classes = useStyle();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    
    window.sessionStorage.removeItem('token');
    ChangePage('/login')
  };

  const isUserAuthenticated = !!window.sessionStorage.getItem('token');

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <AccountCircleIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {isUserAuthenticated ? (
          <>
            <MenuItem onClick={handleLogout}>
              
                Perfil
              
            </MenuItem>
            <MenuItem onClick={handleLogout}>
                Logout
            </MenuItem>
          </>
        ) : (
          <>
          <MenuItem onClick={() =>ChangePage('/login')}>
            
              Login
            
          </MenuItem>

          <MenuItem onClick={() =>ChangePage('/register')}>
          
            Registrar
          
          </MenuItem>
          </>
        )}
      </Menu>
    </div>
  );
}