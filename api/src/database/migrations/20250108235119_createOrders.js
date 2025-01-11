const up = (knex) =>
  knex.schema.createTable("orders", (table) => {
    table.increments("id");
    table
      .integer("user_id")
      .references("id")
      .inTable("users")
      .notNullable()
      .onDelete("CASCADE");
    table.timestamp("created_at").default(knex.fn.now()).notNullable();
    table
      .enum("status", ["pending", "preparing", "delivered"], {
        useNative: true,
        enumName: "status",
      })
      .notNullable()
      .defaultTo("pending");
  });

const down = (knex) => knex.schema.dropTable("orders");

export { up, down };
