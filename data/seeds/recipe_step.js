
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_step').del()
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_step').insert([
        // Make grandma's cookies
        {recipe_id: 1, step_number: 1, instructions: "Cream sugar and butter in a large mixing bowl for 2 minutes using a paddle. Preheat oven to 350."},
        {recipe_id: 1, step_number: 2, instructions: "Add egg and flour to the mixing bowl and mix well until combined."},
        {recipe_id: 1, step_number: 3, instructions: "Spoon dough into balls on greased pan, leaving about an inch between each cookie."},
        {recipe_id: 1, step_number: 4, instructions: "Bake for about 12-15 minutes, until golden brown."},
        // Make Robert's Apple Pie
        {recipe_id: 2, step_number: 1, instructions: "Break butter into small pieces and incorporate into flour in small amounts until a dough is formed. Preheat oven to 350."},
        {recipe_id: 2, step_number: 2, instructions: "Roll flour out until the dough is about 1/6th inches thick, place into pie dish."},
        {recipe_id: 2, step_number: 3, instructions: "Slice apples thinly and place on top of the dough in the pie dish until almost filled. Add sugar to the top of the apples."},
        {recipe_id: 2, step_number: 4, instructions: "Bake about 40-45 minutes until apples are soft and caramelized and crust is golden brown."},

        // Make Christian's Hockey Puck
        {recipe_id: 3, step_number: 1, instructions: "Get hamburger puck out from fridge."},
        {recipe_id: 3, step_number: 2, instructions: "Put meat on fire"},
        {recipe_id: 3, step_number: 3, instructions: "Oops. Accidentally burn meat."},
        {recipe_id: 3, step_number: 4, instructions: "Eat Anyway. Me Hungry."},
      ]);
    });
};
