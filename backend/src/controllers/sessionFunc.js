const connection = require('../database/connection');

module.exports = {

    async create(request, response){
        const { name, CPF} = request.body

        const func = await connection('funcionarios')
            .where('CPF', CPF)
            .first()
    if(!func){
            return response.status(400).json({ error:'No employee Found with this CPF' })    
        }
    return response.json(func);    
    }
}