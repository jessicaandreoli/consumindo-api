exports.up = knex => knex.schema.createTable("links", table => {
  table.increments("id");
  table.text("url").notNullable();

  table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE");// dizendo que se deletar as notas as tags tb serão, o ondelete é p isso
  table.timestamp("created_at").default(knex.fn.now());
});


exports.down = knex => knex.schema.dropTabe("links");
