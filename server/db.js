const { Pool } = require("pg");
require("dotenv").config();

const dbConfig = {
  user: "postgres",
  password: "Nikki@1999",
  host: "localhost",
  port: 5432,
  database: "org_foods",
};

const pool = new Pool(dbConfig);

module.exports = pool;
