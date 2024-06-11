import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography, Stack, Button, Icon } from "@mui/material";
import ThermostatIcon from '@mui/icons-material/Thermostat';
import OpacityIcon from '@mui/icons-material/Opacity';
import GrassIcon from '@mui/icons-material/Grass';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import AirIcon from '@mui/icons-material/Air';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { styled } from '@mui/system';


function cases (props, Item){
    let itens, general;
    let icone = <ThermostatIcon sx={{ fontSize: 30 }}/>
    switch (props.type) {
        case 'InstTemperature':

            icone = <ThermostatIcon sx={{ fontSize: 30 }}/>

            const humidTemperature = props.humidTemperature
            const maxTemperature = props.maxTemperature
            const minTemperature = props.minTemperature

            general = props.instTemperature
            const HTMLTemperature = () => {

                return(
                <>
                <Item><Typography fontSize={18} variant="caption">tempHumi: {humidTemperature}°</Typography></Item>

                <Item><Typography fontSize={18} variant="caption">Máx: {maxTemperature}°</Typography></Item>

                <Item><Typography fontSize={18} variant="caption">Mín: {minTemperature}°</Typography></Item>

                <Item>
                    <Button variant="outlined" size="small">
                        Consultar
                    </Button>
                </Item>
                </>
                )
            }
            itens = HTMLTemperature()
            
        break;
        case 'InstHumidity':
            icone = <OpacityIcon sx={{ fontSize: 30 }}/>

            general = props.instHumidity
            const maxHumidity = props.maxHumidity
            const minHumidity = props.minHumidity

            const HTMLhumidade = () => {

                return(
                <>
                <Item><Typography fontSize={18} variant="caption">Máx: {maxHumidity}°</Typography></Item>

                <Item><Typography fontSize={18} variant="caption">Mín: {minHumidity}°</Typography></Item>

                <Item>
                    <Button variant="outlined" size="small">
                        Consultar
                    </Button>
                </Item>
                </>
                )
            }
            itens = HTMLhumidade()
        break;
        case 'InstDew':
            icone = <GrassIcon sx={{ fontSize: 30 }}/>

            general = props.instDew
            const maxDew = props.maxDew
            const mindDew = props.mindDew

            const HTMLDew = () => {

                return(
                <>
                <Item><Typography fontSize={18} variant="caption">Máx: {maxDew}°</Typography></Item>

                <Item><Typography fontSize={18} variant="caption">Mín: {mindDew}°</Typography></Item>

                <Item>
                    <Button variant="outlined" size="small">
                        Consultar
                    </Button>
                </Item>
                </>
                )
            }
            itens = HTMLDew()
        break;
        case 'InstPressure':
            icone = <CompareArrowsIcon sx={{ fontSize: 30 }}/>

            general = props.instPressure
            const maxPressure = props.maxPressure
            const MinPressure = props.MinPressure
            const seaLevalPressure = props.seaLevalPressure

            const HTMLPressure = () => {

                return(
                <>
                <Item><Typography fontSize={18} variant="caption">seaLevalPressure: {seaLevalPressure}°</Typography></Item>
                
                <Item><Typography fontSize={18} variant="caption">Máx: {maxPressure}°</Typography></Item>

                <Item><Typography fontSize={18} variant="caption">Mín: {MinPressure}°</Typography></Item>

                <Item>
                    <Button variant="outlined" size="small">
                        Consultar
                    </Button>
                </Item>
                </>
                )
            }
            itens = HTMLPressure()
        break;
        case 'WindSpeed':
            icone = <AirIcon sx={{ fontSize: 30 }}/>

            general = props.windSpeed
            const windDirection = props.windDirection
            const windGust = props.windGust

            const HTMLWind = () => {

                return(
                <>
                <Item><Typography fontSize={18} variant="caption">windDirection: {windDirection}</Typography></Item>
                
                <Item><Typography fontSize={18} variant="caption">windGust: {windGust}km/h</Typography></Item>

                <Item>
                    <Button variant="outlined" size="small">
                        Consultar
                    </Button>
                </Item>
                </>
                )
            }
            itens = HTMLWind()
        break;
        case 'WbCloudyIcon':
            icone = <WbCloudyIcon sx={{ fontSize: 30 }}/>

            general = props.cloudiness
            const highClouds = props.highClouds
            const lowClouds = props.lowClouds
            const mediumClouds = props.mediumClouds

            const HTMLCloud = () => {

                return(
                <>
                <Item><Typography fontSize={18} variant="caption">highClouds: {highClouds}</Typography></Item>
                
                <Item><Typography fontSize={18} variant="caption">lowClouds: {lowClouds}km/h</Typography></Item>

                <Item><Typography fontSize={18} variant="caption">mediumClouds: {mediumClouds}km/h</Typography></Item>

                <Item>
                    <Button variant="outlined" size="small">
                        Consultar
                    </Button>
                </Item>
                </>
                )
            }
            itens = HTMLCloud()

        break;
        case 'Precipitation':
            icone = <ThunderstormIcon sx={{ fontSize: 30 }}/>
            general = props.precipitationValue
            const HTMLPrecipitation = () => {

                return(
                <>
                <Item><Typography fontSize={18} variant="caption"></Typography></Item>

                <Item>
                    <Button variant="outlined" size="small">
                        Consultar
                    </Button>
                </Item>
                </>
                )
            }
            itens = HTMLPrecipitation()
        break;
        case 'Visibility':
            icone = <VisibilityOffIcon sx={{ fontSize: 30 }}/>
            general = props.visibilityValue
            const HTMLVisibility = () => {

                return(
                <>
                <Item>
                    <Button variant="outlined" size="small">
                        Consultar
                    </Button>
                </Item>
                </>
                )
            }
            itens = HTMLVisibility()
        break;
    }  
    return { icone, itens, general};

}

export default function BoxResult(props) {
    const Item = styled('div')(({ theme }) => ({
        textAlign: 'center',  
        padding: 1,
        borderRadius: 1,
        }));
        
    const { icone, itens, general, } = cases(props, Item);
    
  return (
    <Box
      height={200}
      width={200}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid grey' }}
      flexDirection={'column'}
      justifyContent={"space-between"}
      padding={2}
    >
      
      <Stack direction="row" spacing={6}>
      <Item>{icone}</Item>
      <Item><Typography variant="h5">
          {general}
        </Typography></Item>
    </Stack>
    
      <Stack direction="column" >

      {itens}

      </Stack>
      
    </Box>      
    
  );
}