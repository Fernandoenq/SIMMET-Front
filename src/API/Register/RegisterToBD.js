const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3001; // Escolha a porta que desejar

// Configuração do banco de dados
const db = mysql.createConnection({
  host: '193.203.175.55', // Host do banco de dados (ex: localhost)
  user: 'u115176877_SIMMET', // Nome de usuário do banco de dados
  password: 'J20010917$!##&%20011013f', // Senha do banco de dados
  database: 'u115176877_SIMMET' // Nome do banco de dados
});

// Conecta ao banco de dados
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conectado ao banco de dados MySQL');
});

// Middleware para analisar solicitações de conteúdo JSON
app.use(bodyParser.json());

// Rota para inserir dados de cadastro no banco de dados
app.post('/api/cadastro', (req, res) => {
  const { nome, sobrenome, email, senha, idade } = req.body;
  const sql = `INSERT INTO cadastro (nome, sobrenome, email, senha, idade) VALUES (?, ?, ?, ?, ?)`;
  db.query(sql, [nome, sobrenome, email, senha, idade], (err, result) => {
    if (err) {
      console.error('Erro ao inserir registro:', err);
      res.status(500).send('Erro ao inserir registro no banco de dados');
    } else {
      console.log('Registro inserido com sucesso');
      res.status(200).send('Registro inserido com sucesso');
    }
  });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
