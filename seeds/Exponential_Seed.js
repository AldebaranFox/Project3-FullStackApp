/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  await knex('Exponential').del()
  await knex('Exponential').insert([
    {function: 'rowValue1'},
    {function: 'rowValue2'},
    {function: 'rowValue2'},
    {function: 'rowValue2'},
    {function: 'rowValue3'}
  ]);
};
