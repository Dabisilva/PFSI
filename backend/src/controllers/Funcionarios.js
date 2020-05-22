const connection = require('../database/connection')

module.exports = {
    async index(request, response){
        const funcionarios = await connection('funcionarios').select('*')

        return response.json(funcionarios);
    },

    async create(request, response){
        const {name, email, telefone, CPF} = request.body

        await connection('funcionarios').insert({
            name,
            email,
            telefone,
            CPF
        })

        return response.json({name})
    }
}