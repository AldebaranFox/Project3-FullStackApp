/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries & inserts the specified
  await knex('Polinomial').del()
  await knex('Polinomial').insert([
    {function: 'x'},
    {function: 'x^2'},
    {function: 'x^3'},
    {function: 'rowValue2'},
    {function: 'rowValue3'}
  ]);
};
