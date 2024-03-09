const express = require('express');

const cors = require('cors');

const API_PORT = 3000;
const API_PATH = 'api';

const turmasRouter = require('./api/turmas');

const app = express(); // cria um objeto que irá representar a aplicação
app.use(cors());

app.use(`/${API_PATH}/turmas`, turmasRouter);

app.listen(API_PORT, () => {
  console.log(`Servidor executando em http://localhost:${API_PORT}/${API_PATH}`);
})
