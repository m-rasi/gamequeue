"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class StreamSchema extends Schema {
  up() {
    this.create("streams", (table) => {
      table.increments();
      table.string("name").notNullable();
      table.string("gameId").notNullable();
      table.string("ip").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("streams");
  }
}

module.exports = StreamSchema;
