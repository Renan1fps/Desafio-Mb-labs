import { schema} from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export  class UpdateEventValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({ trim: true }),
    description: schema.string({ trim: true }),
    place: schema.string({ trim: true }),
    data: schema.string({ trim: true }),
  })

  public messages = {}
}
