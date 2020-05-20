const express = require('express');

const Alunos = require('./controllers/Alunos');

const routes = express.Router()

routes.post('/', Alunos.create);
routes.get('/List', Alunos.index);

module.exports = routes