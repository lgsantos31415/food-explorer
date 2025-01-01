import config from "../../knexfile.js";
import knex from "knex";

const con = knex(config.development);

export default con;
