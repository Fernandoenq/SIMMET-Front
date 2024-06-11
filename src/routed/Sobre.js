import eu from '../Assets/eu.jpg'
import { makeStyles } from '@mui/styles'
import ButtonMiniInterface from '../Components/ButtonMiniInterface'
import ConfirmCase from '../Components/ConfirmCase'
import React, { useState } from 'react';
import Button from '@mui/material/Button';


export default function SobreMim(){

    const [dialogOpen, setDialogOpen] = useState(false);

  const OpenConfirmCase = () => {
    setDialogOpen(true);
  };

  const CloseConfirmCase = (answer) => {
    // Aqui você pode fazer algo com a resposta, por exemplo, enviar para o servidor, atualizar o estado, etc.
    console.log("Resposta do diálogo:", answer);
    setDialogOpen(false);
  };

    return(
        <>
    <h1>Sobre mim</h1>
    <img src={eu}/>
    <div>
        <h1>Fernando Almeida da Silva Filho</h1>
        
        <p>Apaixonado por tecnologia e sempre estudando Internet das Coisas (IoT) e desenvolvimento de Hardware e Software.
        </p>
        
        <h2>Faculdade</h2>
        
        <p>Análise e Desenvolvimento de Sistemas, Fatec Franca - Faculdade de Tecnologia de Franca Dr
        Thomaz Novelino (agosto/2023 - Cursando)
        </p>

        <h2>Curso Técnico</h2>

        <p>-Eletrônica, Etec Dr Júlio Cardoso – Escola Industrial de Franca (agosto/2022 – Cursando)
        </p>

        <h2>Experiência profissional</h2>

        <p>20/01/2020 - 06/04/2020 – SESI - SERVIÇO SOCIAL DA INDUSTRIA
        Cargo: Auxiliar de Laboratório Didático
        </p>

        <p>01/03/2021 - 01/04/2020 – MICROCAMP - Escola de Tecnologia
        Cargo: Professor
        </p>
    </div>

    <ButtonMiniInterface titulo={"meu contato"} 
    texto={"<p>Email: fernandoasfilho74@gmail.com <br> Whatssapp: 16 991005074 <br> link profissional: https://linktr.ee/ferdnandalf</p>"}/>
    <ConfirmCase
        title="Confirmar Ação"
        open={dialogOpen}
        onClose={CloseConfirmCase}
      />

    <Button onClick={OpenConfirmCase} variant="contained">Abrir Diálogo</Button>
      <ConfirmCase
        title="Confirmar Ação"
        open={dialogOpen}
        onClose={CloseConfirmCase}
      >
        Tem certeza de que deseja realizar esta ação?
      </ConfirmCase>
    </>
    )
    
}