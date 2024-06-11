import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import logo from '../Assets/SIMMET.png'
import { makeStyles } from '@mui/styles';

import MainMenu from './MainMenu'
import LoginMenu from './LoginMenu'

import ChangePage from '../API/functions/changePage'

// TODO: Quando for subir, mudar link para https://fernandodev.com.br/
export default function AppHeader() {

  const useStyles = makeStyles({
    toolbar: {
      display: 'flex',
      flexGrow: 1,
      justifyContent: 'space-between',
      backgroundColor: '#155FA0', // Substitua 'cor desejada' pela cor que você deseja usar
    },
  });
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>

      <AppBar position="static">
        <Toolbar variant="regular" className={classes.toolbar}>
          

          <MainMenu/>

          <div onClick={() => ChangePage('/')} style={{ cursor: 'pointer' }}>
            <img style={{ height: '50px' }} src={logo} alt='SIMMET'/>
          </div>
          

          <LoginMenu/>

        </Toolbar>
      </AppBar>

    </Box>

    
  );
}
