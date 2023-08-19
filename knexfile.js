require('dotenv').config();
module.exports = {
  development: {
    client: 'pg',
    connection: {
      database:"test",
      user:"postgres",
      password:"1234"
    },
    searchPath: ['knex', 'public'],
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
  },

  testing: {
    client: 'pg',
    // connection: process.env.DB_URL,
    connection: {
      database:"test",
      user:"postgres",
      password:"1234"
    },
    searchPath: ['knex', 'public'],
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
  },

  production: {
    client: 'pg',
    // connection: process.env.DB_URL,
    connection: {
      database:"test",
      user:"postgres",
      password:"1234"
    },
    searchPath: ['knex', 'public'],
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
  },
};