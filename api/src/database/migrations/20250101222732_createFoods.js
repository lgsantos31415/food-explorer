const up = (knex) =>
  knex.schema.createTable("foods", (table) => {
    table.increments("id");
    table.text("name").notNullable();
    table
      .enum("category", ["Refeição", "Sobremesa", "Bebida"], {
        useNative: true,
        enumName: "categories",
      })
      .notNullable();
    table.text("image");
    table.text("description").notNullable();
    table.decimal("price").notNullable();
    table
      .integer("user_id")
      .references("id")
      .inTable("users")
      .notNullable()
      .onDelete("CASCADE");
    table.timestamp("created_at").default(knex.fn.now()).notNullable();
    table.timestamp("updated_at").default(knex.fn.now()).notNullable();
  });

const down = (knex) => knex.schema.dropTable("foods");

export { up, down };
