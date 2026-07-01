/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  await knex('Trigonometric').del()
  await knex('Trigonometric').insert([
    {function: 'sin(x)'},
    {function: 'cos(x)'},
    {function: 'tan(x)'},
    {function: 'sec(x)'},
    {function: 'arcsin(x)'},
    {function: 'sin(x)/x'},
    {function: '(e^x)cos(x)'},
    {function: '2arctan(e^x)-pi/2'}
  ]);
};
