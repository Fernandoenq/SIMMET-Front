import axios from 'axios';

const cadastrarUsuario = async (usuario) => {
  try {
    const response = await axios.post('http://localhost:3001/api/cadastro', usuario);
    console.log('Resposta da API:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    throw error;
  }
};

export default cadastrarUsuario;
