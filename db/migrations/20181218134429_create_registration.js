exports.up = function(knex, Promise){
  return knex.schema.createTable('registration', function (table){
    table.increments('id').primary();
    table.string('name').notNull();
    table.string('email').notNull();
    table.text('plus_one');
    table.text('song_requests');
    table.text('comments');
    table.integer('rsvp').notNull();

  })
}

exports.down = function(knex, Promise){
    return knex.schema.dropTable('registration');
}