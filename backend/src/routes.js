const express = require('express');

const Alunos = require('./controllers/Alunos');

const routes = express.Router()

routes.post('/', Alunos.create);
routes.get('/List', Alunos.index);
routes.delete('/List/:id', Alunos.delete);
routes.patch('/List/up/:id', Alunos.update);

module.exports = routes