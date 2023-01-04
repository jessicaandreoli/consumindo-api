const { Router } = require("express");
const UsersController = require("../controllers/UsersController");
const userRoutes = Router();

const userController = new UsersController();

/* function myMiddleware(request, response, next) {
  console.log("Você passou pelo Middlare!");

  if (!request.body.isAdmin) {
    return response.json({ message: "user unauthorized!" });
  };
  next();
} */

//userRoutes.use(myMiddleware) // assim aplico o myMiddleware para todas as rotas de usuário
userRoutes.post("/", userController.create);
userRoutes.put("/:id", userController.update);

/* userRoutes.get("/message/:id/:user", (request, response) => {
  const { id, user } = request.params;
  response.send(`
    Você digitou o ID: ${id}
    e o usuário: ${user}
  `);
}); */

/* userRoutes.get("/users", (request, response) => {
  const { page, limit } = request.query;
  response.send(`
  Página: ${page}
  Mostrar: ${limit}
  `);
}); */



module.exports = userRoutes