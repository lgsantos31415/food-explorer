const up = (knex) =>
  knex.schema.createTable("favorites", (table) => {
    table.increments("id");
    table
      .integer("user_id")
      .references("id")
      .inTable("users")
      .notNullable()
      .onDelete("CASCADE");
    table
      .integer("food_id")
      .references("id")
      .inTable("foods")
      .notNullable()
      .onDelete("CASCADE");
  });

const down = (knex) => knex.schema.dropTable("favorites");

export { up, down };
