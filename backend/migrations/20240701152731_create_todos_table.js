// src/db/migrations/*_create_todos_table.js
exports.up = function (knex) {
  return knex.schema.createTable("todos", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.boolean("completed").defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("todos");
};
