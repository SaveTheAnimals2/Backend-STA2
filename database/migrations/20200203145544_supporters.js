
exports.up = function(knex) {
    return knex.schema.createTable('supporter', table => {
        table.increments('id');
        table.string('username', 128)
             .notNullable()
             .unique();
        table.string('password', 128)
             .notNullable();
        table.string('email', 128)
             .notNullable();
        table.timestamps();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('supporter');
};