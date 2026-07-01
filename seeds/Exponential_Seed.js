/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  await knex('Exponential').del()
  await knex('Exponential').insert([
    {function: 'e^x'},
    {function: '-2^x'},
    {function: '3^(-x)'}
  ]);
};
