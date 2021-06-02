import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Ticket from 'App/Models/Ticket'

export default class TicketsController {
  public async index({}: HttpContextContract) {
    // eslint-disable-next-line prettier/prettier
    const tickets = await Ticket.all()
    return tickets
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['name', 'price'])
    const ticket = await Ticket.create(data)
    return ticket
  }

  public async show({ params }: HttpContextContract) {
    const ticket = await Ticket.findOrFail(params.id)
    return ticket
  }

  public async update({ request, params }: HttpContextContract) {
    const ticket = await Ticket.findOrFail(params.id)
    const data = request.only(['name', 'price'])
    ticket.merge(data)
    await ticket.save()
    return ticket
  }

  public async destroy({ params }: HttpContextContract) {
    const ticket = await Ticket.findOrFail(params.id)
    await ticket.delete()
  }
}
