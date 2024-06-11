import React from 'react'
import { makeStyles } from '@mui/styles'
import nuvem from '../Assets/nuvem.jpg'
import Stack from '@mui/system/Stack';
import { styled } from '@mui/system';
import SearchLocation from '../ui/SearchLocation'
import BoxResult from '../ui/BoxResult'

const useStyles = makeStyles({
    imagem: {
        display: 'block',
        margin: '0',
        transition: 'opacity 1s linear',
        width: '100%',
        padding: 0
    },
    centralizado: {
        textAlign: 'center'
    },
})
const stack = {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

const Item = styled('div')(({ theme }) => ({
    textAlign: 'center',  
    padding: 1,
    borderRadius: 1,
    }));


export default function HomePage() {
  
    const classes = useStyles()

    const isUserAuthenticated = !!window.sessionStorage.getItem('token');
    //console.log(isUserAuthenticated)
    //console.log()
    return (
        <>
            <img alt="Nuvens" src={nuvem} className={classes.imagem}/>
            <div className={classes.centralizado}>

            {isUserAuthenticated && <h1>Bem-vindo! Você está autenticado.</h1>}

                <h1>SIMMET</h1>

                <p>SIMMET é um projeto de simulação de dados geográficos desenvolvido pela ForjaSolutions.</p>

            </div>

        
            <SearchLocation/>

            <Stack sx={stack}
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            >
                <Item><BoxResult instTemperature={20} humidTemperature={20} maxTemperature={22} minTemperature={18} type={"InstTemperature"}/></Item>
                <Item><BoxResult instHumidity={20} maxHumidity={22} minHumidity={18}  type={"InstHumidity"}/></Item>
                <Item><BoxResult instDew={20} maxDew={22} mindDew={18} type={"InstDew"}/></Item>
                <Item><BoxResult instPressure={20} seaLevalPressure={10} maxPressure={22} MinPressure={18} type={"InstPressure"}/></Item>
            </Stack>
            <Stack sx={stack}
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}               
            >
                <Item><BoxResult windSpeed={20} windDirection={"Right"} windGust={20} type={"WindSpeed"}/></Item>
                <Item><BoxResult highClouds={25} lowClouds={15} mediumClouds={20} cloudiness={20} type={"WbCloudyIcon"}/></Item>
                <Item><BoxResult precipitationValue={"Chuva forte"} type={"Precipitation"}/></Item>
                <Item><BoxResult visibilityValue={"Muita névoa"} type={"Visibility"}/></Item>
            </Stack>
            
            
        </>
    )
}