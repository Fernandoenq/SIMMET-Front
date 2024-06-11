import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
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

export default function MainMenu() {

  const classes = useStyle()

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    ChangePage('/Sobre')
  };

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
            <MenuIcon />
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
        <h2>Site</h2>

        <MenuItem onClick={handleClose}>
            Sobre mim
        </MenuItem>
      </Menu>
    </div>
  );
}
