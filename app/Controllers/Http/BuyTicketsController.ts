import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Ticket from 'App/Models/Ticket'

export default class BuyTicketsController {
  public async index({}: HttpContextContract) {
    const tickets = Ticket.all()
    return tickets
  }

  public async store({ request }: HttpContextContract) {
    const requestTicket = request.only(['name'])
    const findTicket = await Ticket.findBy('name', requestTicket)
    console.log(findTicket?.name)
  }

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
