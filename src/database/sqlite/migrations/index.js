const sqliteConnection = require("../../sqlite");
const createUsers = require("./createUsers");

async function migrationsRun() {
  const schemas = [
    createUsers
  ].join(''); // p retirar os espaços entre as migrations

  sqliteConnection()
    .then(db => db.exec(schemas)) //pedindo p executar as schemas
    .catch(error => console.log(error));
}

module.exports = migrationsRun;