const path = require("path");

module.exports = {

  development: {
    client: 'sqlite3', // banco de dados que vamos usar
    connection: {
      filename: path.resolve(__dirname, "src", "database", "database.db")//aqui falo o caminho 
      //do banco de dados
    },
    pool: {
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb)
    },
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "knex", "migrations")
    },
    useNullAsDefault: true
  }

};
