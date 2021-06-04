import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class StoreTicketValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({ trim: true }, [rules.unique({ table: 'tickets', column: 'name' })]),
    price: schema.number(),
    eventId: schema.string(),
  })

  public messages = {}
}
