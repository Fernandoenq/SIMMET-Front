import React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Toolbar from '@mui/material/Toolbar'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import AlertBar from '../ui/AlertBar'
import ChangePage from '../API/functions/changePage' 

export default function LoginForm() {

  const [state, setState] = React.useState({
    email: '',
    Password: '',
    aguardando: false,
    alertBarOpen: false,
    alertBarMsg: '',
    alertBarSeverity: 'success'
  })
  const { 
    email, 
    Password, 
    aguardando,
    alertBarOpen,
    alertBarMsg,
    alertBarSeverity 
  } = state

  function handleInputChange(event) {
    setState({...state, [event.target.id]: event.target.value})
  }
  async function handleFormSubmit(event) {
    
    event.preventDefault(); 
    
    try {
      
      const dados = {
        email: state.email,
        Password: state.Password
      };
      
      
      const configuracao = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(dados) 
      };
      
      const url = 'http://127.0.0.1:5000/users/login';
      
      
      const response = await fetch(url, configuracao);
      if (!response.ok) {
        throw new Error('Erro ao chamar o endpoint: ' + response.status);
      }
      
      const data = await response.json(); 
      console.log('Resposta do servidor:', data.logado);

      window.sessionStorage.setItem('token', data.token); 
      console.log('Token de autenticação:', data.token);
      
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
      <h1 style={{ textAlign: 'center'}}>Autentique-se</h1>
      <Paper elevation={4} sx={{
        maxWidth: '300px',
        width: '90%',
        margin: '0 auto',
        padding: '30px'
      }}>
        <form onSubmit={handleFormSubmit}>
          
          <TextField 
            sx={{ marginBottom: '30px '}}
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
            sx={{ marginBottom: '30px '}} 
            id="Password"
            type="password"
            label="Password"
            value={Password}
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
              disabled={email.trim() === '' || Password.trim() === ''}
              onClick={handleFormSubmit}
            >
              Login
            </Button>    

            <Button
              variant="contained"
              color="secondary"
              type="submit"
              onClick={() =>ChangePage('/register')}
            >
              Cadastrar
            </Button>  

          </Toolbar>         

        </form>
      </Paper>       
    </>
  )
}