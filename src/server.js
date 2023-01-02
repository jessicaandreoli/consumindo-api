const express = require("express");

const app = express();
app.use(express.json()); //falando p requisição que o formato é json

app.get("/message/:id/:user", (request, response) => {
  const { id, user } = request.params;
  response.send(`
    Você digitou o ID: ${id}
    e o usuário: ${user}
  `);
});

app.get("/users", (request, response) => {
  const { page, limit } = request.query;
  response.send(`
  Página: ${page}
  Mostrar: ${limit}
  `);
});

app.post("/users", (request, response) => {
  const { name, email, password } = request.body;

  response.send(`${name}, ${email}, ${password}`);
});


const PORT = 3333;
app.listen(PORT, () => console.log(`server is running on Port ${PORT} `));