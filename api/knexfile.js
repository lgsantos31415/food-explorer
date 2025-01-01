import knex from "knex";

const knexConfig = {
  client: "sqlite3",
  connection: {
    filename: "./database/dev.sqlite3",
  },
  useNullAsDefault: true,
  migrations: {
    directory: "./database/migrations",
  },
};

const db = knex(knexConfig);
db.raw("PRAGMA foreign_keys = ON");

export default db;
