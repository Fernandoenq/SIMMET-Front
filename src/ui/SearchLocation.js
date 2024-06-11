import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/system/Stack';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

// TODO: Quando for subir, mudar link para https://fernandodev.com.br/
export default function SearchLocation() {

    const Item = styled('div')(({ theme }) => ({
        backgroundColor: '#85b0ed',
        textAlign: 'center',  
        padding: 1,
        borderRadius: 1,
        }));

        const inputStyles = {
            width: '400px', // Ajuste o tamanho conforme necessário
            fontSize: '16px',
            height: '30px'
        };

  return (
    <Box sx={{ flexGrow: 1 }}>
        <Stack sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            >
            
            <Item><input type="text" placeholder="Cidade" aria-label="City" style={inputStyles}/></Item>
            
            <Item><input type="text" placeholder="Estado" aria-label="State" style={inputStyles}/></Item>
            
            <Item><input type="text"placeholder="Código Postal" aria-label="Zip" style={inputStyles}/></Item>

            <Item><Button variant="contained" endIcon={<TravelExploreIcon />}>
                    Send
            </Button></Item>
            
        </Stack>
    </Box>

    
  );
}