
exports.up = function(knex) {
    return knex.schema.createTable('alunos', function(table){
              table.increments('id').primary();
              table.string('name', 40).notNullable();
              table.string('email', 40).notNullable();
              table.string('senha', 15).notNullable();
              table.string('CPF').notNullable();
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('alunos')
};
