import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Tickets extends BaseSchema {
  protected tableName = 'tickets'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('event_id').unsigned().references('events.id').onDelete('CASCADE')
      table.string('name').notNullable().unique()
      table.integer('price').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
