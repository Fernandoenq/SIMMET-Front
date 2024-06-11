import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import AlertBar from '../ui/AlertBar';
import ChangePage from '../API/functions/changePage'  
import PlanosGrid from '../ui/Planos';
import { da } from 'date-fns/locale';

export default function RegisterForm() {
  const [state, setState] = React.useState({
    name: '',
    email: '',
    password: '',
    selectedPlan: null, // Novo estado para armazenar o plano selecionado
    aguardando: false,
    alertBarOpen: false,
    alertBarMsg: '',
    alertBarSeverity: 'success'
  });

  const { 
    name,
    email, 
    password, 
    selectedPlan, // Estado para o plano selecionado
    aguardando,
    alertBarOpen,
    alertBarMsg,
    alertBarSeverity 
  } = state;

  function handleInputChange(event) {
    setState({...state, [event.target.id]: event.target.value});
  }

  async function handleFormSubmit(event) {
    event.preventDefault(); 
    
    
    try {
      const dados = {
        name: state.name,
        email: state.email,
        password: state.password,
        selectedPlan: state.selectedPlan // Inclui o plano selecionado nos dados
      };
      
      const configuracao = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(dados) 
      };
      
      const url = 'http://127.0.0.1:5000/users/register';
      
      const response = await fetch(url, configuracao);
      if (!response.ok) {
        throw new Error('Erro ao chamar o endpoint: ' + response.status);
      }
      
      const data = await response.json(); 
      window.sessionStorage.setItem('token', data.token);
    
      setState({
        ...state,
        aguardando: false,
        alertBarOpen: true,
        alertBarSeverity: 'success',
        alertBarMsg: 'Autenticação efetuada com sucesso'
      });

      ChangePage('/')
    } catch (error) {
      console.error('Erro:', error);
    }
  }

  return (
    <>
      <AlertBar 
        severity={alertBarSeverity} 
        open={alertBarOpen}
        onClose={() => setState({...state, alertBarOpen: false})}
      >
        {alertBarMsg}
      </AlertBar>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={aguardando}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <h1 style={{ textAlign: 'center'}}>Cadastro</h1>
      
      <PlanosGrid onSelectPlan={(plan) => setState({...state, selectedPlan: plan})} /> {/* Passa a função para selecionar o plano */}

      <Paper elevation={4} sx={{
        maxWidth: '300px',
        width: '90%',
        margin: '0 auto',
        padding: '30px'
      }}>
        <form onSubmit={handleFormSubmit}>
          <TextField 
            sx={{ marginBottom: '15px'}}
            id="name" 
            label="name"
            value={name}
            variant="filled"
            placeholder="Informe o nome"
            required
            fullWidth
            onChange={handleInputChange}
          />
          <TextField 
            sx={{ marginBottom: '15px'}}
            id="email" 
            label="E-mail"
            value={email}
            variant="filled"
            placeholder="Informe o e-mail"
            required
            fullWidth
            onChange={handleInputChange}
          />
          <TextField
            sx={{ marginBottom: '15px'}} 
            id="password"
            type="password"
            label="password"
            value={password}
            variant="filled"
            placeholder="Informe a senha"
            required
            fullWidth
            onChange={handleInputChange}
          />
          <Toolbar sx={{
            width: '100%',
            justifyContent: 'space-around',
            padding: "0 !important"
          }}>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              onClick={() =>ChangePage('/login')}
            >
              Login
            </Button> 
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              disabled={name.trim() === '' || email.trim() === '' || password.trim() === '' || selectedPlan === null} // Desabilita o botão se nenhum plano estiver selecionado
              onClick={handleFormSubmit}
            >
              Cadastrar
            </Button>   
          </Toolbar> 
        </form>
      </Paper>       
    </>
  )
}
