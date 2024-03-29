/* eslint-disable prettier/prettier */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Event from 'App/Models/Event'
import Ticket from 'App/Models/Ticket'
import { StoreTicketValidator, UpdateTicketValidator } from 'App/Validators/Ticket'
<<<<<<< HEAD

=======
>>>>>>> 7b7e515918ed6829b51f52e24540518727b4da24

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
    if (eventFind == undefined) {
      throw new Error('Event not found')
    } else {
      const ticket = await Ticket.create({
        eventId: eventFind?.id,
        name: data.name,
        price: data.price,
      })
      await ticket.load('event')
      return ticket
    }
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
    await ticket.preload('event')
    return ticket
  }

  public async destroy({ params }: HttpContextContract) {
    const ticket = await Ticket.findOrFail(params.id)
    await ticket.delete()
  }
}
