const express = require('express');

const Alunos = require('./controllers/Alunos');
const Funcionarios = require('./controllers/Funcionarios');
const sessionFunc = require('./controllers/sessionFunc');

const routes = express.Router()

routes.post('/', Alunos.create);
routes.get('/List', Alunos.index);
routes.delete('/List/:id', Alunos.delete);
routes.put('/List/up/:id', Alunos.update);

routes.post('/func', Funcionarios.create)
routes.get('/func', Funcionarios.index)

routes.post('/session', sessionFunc.create)



module.exports = routes