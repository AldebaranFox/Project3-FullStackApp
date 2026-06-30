/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
   return knex.schema.createTable('Saved', table => {
      table.increments('id');
      table.string('function').notNullable();
      table.timestamps(true, true); // utility columns, adds created_at and updated_at
   });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
   return knex.schema.dropTableIfExists('Saved');
};

