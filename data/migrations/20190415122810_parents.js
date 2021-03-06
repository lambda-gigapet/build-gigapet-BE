exports.up = function(knex, Promise) {
    return knex.schema.createTable("parents", table => {
        table.increments();
        table.string("name").notNullable();
        table
            .string("email")
            .notNullable()
            .unique();
        table
            .string("username")
            .notNullable()
            .unique();
        table.string("password").notNullable();
        table.string("img_url");
        table.integer("pin");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("parents");
};
