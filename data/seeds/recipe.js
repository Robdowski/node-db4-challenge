
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {title: "Grandma's Cookies"}, //1
        {title: "Chef Robert's Apple Pie"}, //2
        {title: "Christian's Hockey Puck Burger"} //3
      ]);
    });
};
