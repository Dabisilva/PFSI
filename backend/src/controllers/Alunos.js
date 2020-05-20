const connection = require('../database/connection');

const crypto = require('../utils/crypto')

module.exports = {
    async index(request, response){
        const alunos = await connection('alunos').select('*')
        
        return response.json(alunos)
    },

    async create(request, response){
        const {name , email, CPF} = request.body
        const senha = crypto()

        const Aluno = await connection('alunos').findOne('name')

        if(!Aluno){
            await connection('alunos').insert({
                name,
                email,
                senha,
                CPF
            })
        }
        
        return response.json({ name })
    }
}