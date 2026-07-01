/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries & inserts the specified
  await knex('Polynomial').del()
  await knex('Polynomial').insert([
    {function: 'x'},
    {function: '(x+1)^2'},
    {function: 'x^3+1'},
    {function: '-5x^4+4x^3-3'},
    {function: '-(x+3)^3(x-1)(x-5)'}
  ]);
};
