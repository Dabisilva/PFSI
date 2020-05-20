
exports.up = function(knex) {
    return knex.schema.createTable('alunos', function(table){
              table.string('id').primary();
              table.string('name', 40).notNullable();
              table.string('email', 40).notNullable();
              table.string('senha', 15).notNullable();
              table.string('CPF').notNullable();
              table.timestamps();
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('alunos')
};
