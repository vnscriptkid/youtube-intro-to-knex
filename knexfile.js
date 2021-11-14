// Update with your config settings.
var options = {
  development: {
    client: "pg",
    connection: "postgresql://postgres:123456@localhost:5432/knex_todos",
    migrations: {
      directory: __dirname + "/db/migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds",
    },
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + "/db/migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds/production",
    },
  },
};

var environment = process.env.NODE_ENV || "development";
var config = options[environment];
module.exports = config;
