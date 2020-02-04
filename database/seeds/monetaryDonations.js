
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('itemize_monetary_donations').del()
    .then(function () {
      // Inserts seed entries
      return knex('itemize_monetary_donations').insert([
        {
          id: 1, 
          campaignId: '1', 
          itemName: 'food', 
          amountNeeded: '$5,000'
        },
      ]);
    });
};
