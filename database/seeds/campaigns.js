
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('campaign').del()
    .then(function () {
      // Inserts seed entries
      return knex('campaign').insert(
        [
          {
            id: 1, 
            title: 'Caribbean Sea Turtle Project', 
            location: 'St. Georges, Grenada Caribbean', 
            description: 'The Caribbean Sea Turtle Project is based in St. Georges, Grenada but we work all over the island. We have been working to conserve the sea turtles that visit our shores and surrounding ocean for the past 30 years', 
            species:'Sea Turtle', 
            urgencyLevel: 'medium', 
            fundingGoals: '$10,000', 
            deadline: '6/1/2020'
          },
        ] 
      );
    });
};
