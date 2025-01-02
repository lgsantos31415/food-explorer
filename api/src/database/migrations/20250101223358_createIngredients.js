const up = (knex) =>
  knex.schema.createTable("ingredients", (table) => {
    table.increments("id");
    table.text("name").notNullable();
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

const down = (knex) => knex.schema.dropTable("ingredients");

export { up, down };
