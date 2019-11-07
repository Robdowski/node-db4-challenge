
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredient').del()
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredient').insert([
        //Grandma's Cookies
        {recipe_id: 1, ingredient_id: 1, name: "Egg", amount: "1 Egg"},
        {recipe_id: 1, ingredient_id: 2, name: "Sugar", amount: "2 cups"},
        {recipe_id: 1, ingredient_id: 3, name: "Flour", amount: "3 cups"},
        {recipe_id: 1, ingredient_id: 4, name: "Butter", amount: "1/2 cup"},

        // Chef Robert's Apple Pie
        {recipe_id: 2, ingredient_id: 2, name: "Sugar", amount: "2 cups"},
        {recipe_id: 2, ingredient_id: 3, name: "Flour", amount: "2 cups"},
        {recipe_id: 2, ingredient_id: 4, name: "Butter", amount: "1 stick"},
        {recipe_id: 2, ingredient_id: 5, name: "Apples", amount: "2 Apples"},

        // Christian's Hockey Puck Hamburger
        {recipe_id: 3, ingredient_id: 6, name: "Blackened Hamburger Meat, Burnt to a Crisp", amount: "1 Puck"},
      ]);
    });
};
