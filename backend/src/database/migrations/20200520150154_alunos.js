
exports.up = function(knex) {
    return knex.schema.createTable('alunos', function(table){
              table.increments();
        
              table.string('name', 40).notNullable();
              table.string('email', 40).notNullable();
              table.string('telefone').notNullable();
              table.string('CPF', 11).notNullable();
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('alunos')
};
