import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Events extends BaseSchema {
  protected tableName = 'events'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable().unique()
      table.string('description').notNullable()
      table.string('place').notNullable()
      table.string('data').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }d

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
