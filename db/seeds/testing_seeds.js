
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('registration').del()
    .then(function () {
      // Inserts seed entries
      return knex('registration').insert([
        {
          name: 'person1',
          email: 'email1',
          plus_one:'person1a, person1b',
          song_requests: 'song1',
          comments: 'testing'
        },
        {
          name: 'person2',
          email: 'email2',
          plus_one:'person2a, person2b',
          song_requests: 'song2',
          comments: 'testing'
        }
      ]);
    });
};