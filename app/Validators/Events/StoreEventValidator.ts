import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export  class StoreEventValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({ trim: true }, [rules.unique({ table: 'events', column: 'name' })]),
    description: schema.string({ trim: true }),
    place: schema.string({ trim: true }),
    data: schema.string({ trim: true }),
  })

  public messages = {}
}
