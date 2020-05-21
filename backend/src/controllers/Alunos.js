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

        
        await connection('alunos').insert({
            name,
            email,
            senha,
            CPF
        })
        
        return response.json({ name })
    },

    async delete(request, response){
        const {id} = request.params;
        const senha = request.headers.authorization;

        const alunos = await connection('alunos')
            .where('id', id)
            .select('senha')
            .first()
        
        if(alunos.senha != senha){
            return response.status('401').json({  error: 'Operation not permitted. '  })
        }
        await connection('alunos').where('id', id).delete();

        return response.status('204').send();
        },

    async update(request, response){
        const {id} = request.params;
        const {name, email} = request.body;

       await connection('alunos')
            .where('id', id)
            .update({
                name,
                email
            })

        const mostra = await connection('alunos')
            .where('id', id)
            .select('*')

        return response.json(mostra);
    
    }
}