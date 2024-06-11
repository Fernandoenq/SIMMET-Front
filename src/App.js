import './App.css';
import AppHeader from './ui/AppHeader'
import AppFooter from './ui/AppFooter'
import { createTheme, ThemeProvider } from '@mui/material'
import { blue, amber } from '@mui/material/colors'
import Box from '@mui/material/Box'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Sobre from './routed/Sobre'
import HomePage from './routed/HomePage';
import LoginForm from './routed/LoginForm';
import RegisterForm from './routed/RegisterForm';

const customTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: blue[600]
    },
    secondary: {
      main: amber['A400']
    }
  },
  paletteWhite:{
    mode: 'Secondary',
    primary: {
      main: blue[600]
    },
    secondary: {
      main: amber['A400']
    }
  }
})

function App() {

  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{
        minHeight: '100vh',     // 100% da altura da área de exibição
        marginBottom: '48px',   // Desconta a altura do AppFooter
        backgroundColor: '#DCDCDC',
        color: customTheme.palette.text.Dark
      }}>
        
        <BrowserRouter>
          <AppHeader />
          
          <Box component="main" sx={{ margin: '24px' }}>
            <Routes>

              <Route path="/" element={<HomePage />} />

              <Route path="/Sobre" element={<Sobre />} />

              <Route path="/login" element={<LoginForm />} />

              <Route path="/register" element={<RegisterForm />} />
            </Routes>
            
          </Box>

          <AppFooter />
          
        </BrowserRouter>
        
      </Box>
      

    </ThemeProvider>
  );
}

export default App;