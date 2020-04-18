
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('status').del()
    .then(function () {
      // Inserts seed entries
      return knex('status').insert([
        {id: 1, requester: 'active'},
        {id: 2, deliverer: 'active'}
      ]);
    });
};