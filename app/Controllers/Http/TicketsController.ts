/* eslint-disable prettier/prettier */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Event from 'App/Models/Event'
import Ticket from 'App/Models/Ticket'
import { StoreTicketValidator, UpdateTicketValidator } from 'App/Validators/Ticket'
import Database from '@ioc:Adonis/Lucid/Database'

export default class TicketsController {
  public async index({}: HttpContextContract) {
    // eslint-disable-next-line prettier/prettier
    const tickets = await Ticket.all()
    return tickets
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(StoreTicketValidator)
    const eventBody = data.eventId
    const eventFind = await Event.findBy('name', eventBody)
    console.log(eventFind?.id)
    const ticket = await Ticket.create({
      eventId: eventFind?.id,
      name: data.name,
      price: data.price,
    })
    await ticket.preload('event')
    return ticket
  }

  public async show({ params }: HttpContextContract) {
    const ticket = await Ticket.findOrFail(params.id)
    return ticket
  }

  public async update({ request, params }: HttpContextContract) {
    const ticket = await Ticket.findOrFail(params.id)
    const data = await request.validate(UpdateTicketValidator)
    ticket.merge(data)
    await ticket.save()
    return ticket
  }

  public async destroy({ params }: HttpContextContract) {
    const ticket = await Ticket.findOrFail(params.id)
    await ticket.delete()
  }
}
