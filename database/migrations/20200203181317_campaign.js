
exports.up = function(knex) {
    return knex.schema.createTable('campaign', table => {
        table.increments('id');
        table.string('title', 128)
             .notNullable()
        table.string('location', 128)
             .notNullable()
        table.string('description', 128)
             .notNullable()
        table.string('species', 128)
             .notNullable()
        table.string('urgencyLevel', 128)
             .notNullable()
        table.string('fundingGoals', 128)
             .notNullable()
        table.string('deadline', 128)
             .notNullable()
        table.timestamps();
        

    })
    .createTable('itemize_monetary_donations', tbl => {
        tbl.increments()
        tbl.integer('campaignId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('campaign')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        tbl.string('itemName').notNullable()
        tbl.string('amountNeeded').notNullable()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('itemize_monetary_donations')
    return knex.schema.dropTableIfExists('campaign');
};