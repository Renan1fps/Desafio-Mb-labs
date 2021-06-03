import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Event from 'App/Models/Event'
import { StoreEventValidator, UpdateEventValidator } from 'App/Validators/Events'

export default class EventsController {
  public async index({}: HttpContextContract) {
    const events = await Event.all()
    return events
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(StoreEventValidator)
    const event = await Event.create(data)
    return event
  }

  public async show({ params }: HttpContextContract) {
    const event = await Event.findOrFail(params.id)
    return event
  }

  public async update({ request, params }: HttpContextContract) {
    const event = await Event.findOrFail(params.id)
    const data = await request.validate(UpdateEventValidator)
    event.merge(data)
    await event.save()
    return event
  }

  public async destroy({ params }: HttpContextContract) {
    const event = await Event.findOrFail(params.id)
    await event.delete()
  }
}
