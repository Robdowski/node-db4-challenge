
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredient').del()
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient').insert([
        {name: "Egg"}, //1
        {name: "Sugar"}, //2
        {name: "Flour"}, //3
        {name: "Butter"}, //4 
        {name: "Apples"}, //5
        {name: "Hockey Puck"} //6
      ]);
    });
};
