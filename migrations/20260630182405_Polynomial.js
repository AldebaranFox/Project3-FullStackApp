/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
   return knex.schema.createTable('Polynomial', table => {
      table.increments('id'); // adds an auto incrementing PK (Primary Key) column
      table.string('function').notNullable(); // equivalent of varchar(255)
   });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
   return knex.schema.dropTableIfExists('Polynomial');
};
