const knex = require("../database/knex");

class NotesController {
  async create(request, response) {
    const { title, description, tags, links } = request.body;
    const { user_id } = request.params;

    //inserindo na const node_id o title, description, user_id que estão no notes
    const note_id = await knex("notes").insert({
      title,
      description,
      user_id
    });

    //percorrendo o link, retornando o note_id e atribuindo o link a uma url
    const linksInsert = links.map(link => {
      return {
        note_id,
        url: link
      }
    });

    //inserindo o linksInsert dentro da tabela links
    await knex("links").insert(linksInsert);

    const tagsInsert = tags.map(name => {
      return {
        note_id,
        name,
        user_id
      }
    });

    //inserindo o tagsInsert dentro da tabela tags
    await knex("tags").insert(tagsInsert);

    response.json();
  }

  async show(request, response) {
    const { id } = request.params;

    const note = await knex("notes").where({ id }).first();
    const tags = await knex("tags").where({ note_id: id }).orderBy("name");
    const links = await knex("links").where({ note_id: id }).orderBy("created_at");

    return response.json({
      ...note,
      tags,
      links
    });
  }
}

module.exports = NotesController;