
exports.up = function(knex) {
  return knex.schema.createTable('recipe', tbl => {
      tbl.increments()

      tbl.string('title', 255).notNullable()
  })
  .createTable('ingredient', tbl => {
      tbl.increments()

      tbl.string('name', 255).notNullable()
  })
  .createTable('recipe_ingredient', tbl => {
      tbl.increments()

      tbl.integer('recipe_id').references('id').inTable('recipe').onDelete('RESTRICT').onUpdate('CASCADE')
      tbl.integer('ingredient_id').references('id').inTable('ingredient').onDelete('RESTRICT').onUpdate('CASCADE')

      tbl.string('name', 255).notNullable()
      tbl.string('amount', 255).notNullable()
  })
  .createTable('recipe_step', tbl => {
      tbl.increments()

      tbl.integer('recipe_id').references('id').inTable('recipe').onDelete('RESTRICT').onUpdate('CASCADE')

      tbl.integer('step_number').notNullable()
      tbl.string('instructions', 255).notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('recipe_step')
  .dropTableIfExists('recipe_ingredient')
  .dropTableIfExists('ingredient')
  .dropTableIfExists('recipe')
};
