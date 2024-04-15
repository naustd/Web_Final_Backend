const { Pool } = require("pg");
require("dotenv").config();

const dbConfig = {
  user: "default",
  password: "7vYNM0erXVZi",
  host: "ep-lucky-poetry-a4l7hhon-pooler.us-east-1.aws.neon.tech",
  port: 5432,
  database: "verceldb",
};

const pool = new Pool(dbConfig);

module.exports = pool;
