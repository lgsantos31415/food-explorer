const up = (knex) =>
  knex.schema.createTable("ordered", (table) => {
    table.increments("id");
    table.integer("quantity").notNullable();
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
    table
      .integer("order_id")
      .references("id")
      .inTable("orders")
      .notNullable()
      .onDelete("CASCADE");
  });

const down = (knex) => knex.schema.dropTable("ordered");

export { up, down };
