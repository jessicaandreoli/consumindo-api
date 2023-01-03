const sqlite3 = require("sqlite3");// drive q vou utilizar/versão
const sqlite = require("sqlite");//sqlite de fato
const path = require("path"); // p ajudar a controlar as variáveis de ambiente ao passar o caminho no fillename

//aqui estou dizendo através do filename aonde o arquivo vai ficar salvo
//e através do dirname pega de forma automática aonde estou no meu projeto e passo aonde quero
//que o database seja criado

async function sqliteConnection() {
  const database = await sqlite.open({
    filename: path.resolve(__dirname, "..", "database.db"),
    driver: sqlite3.Database,
  });
  return database;
}

module.exports = sqliteConnection;