const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const alunos = await connection('alunos').select('*')
        
        return response.json(alunos)
    },

    async create(request, response){
        const {name , email, telefone, CPF} = request.body

        await connection('alunos').insert({
            name,
            email,
            telefone,
            CPF
        })
        
        return response.json({ name })
    },

    async delete(request, response){
        const {id} = request.params;
        const CPF = request.headers.authorization;

        const alunos = await connection('alunos')
            .where('id', id)
            .select('CPF')
            .first()
        
        if(alunos.CPF != CPF){
            return response.status('401').json({  error: 'Operation not permitted. '  })
        }
        await connection('alunos').where('id', id).delete();

        return response.status('204').send();
        },

    async update(request, response){
        const {id} = request.params;
        const {name, email, telefone} = request.body;

       await connection('alunos')
            .where('id', id)
            .update({
                name,
                email,
                telefone
            })

        const mostra = await connection('alunos')
            .where('id', id)
            .select('*')

        return response.json(mostra);
    
    }
}