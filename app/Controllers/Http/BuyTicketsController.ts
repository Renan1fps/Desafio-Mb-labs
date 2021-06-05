import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Ticket from 'App/Models/Ticket'
import { BuyTicketValidator } from 'App/Validators/buyTicket/BuyTicketValidator'

export default class BuyTicketsController {
  public async index({}: HttpContextContract) {
    const tickets = Ticket.all()
    return tickets
  }

  public async store({ request, auth }: HttpContextContract) {
    const requestTicket = await request.validate(BuyTicketValidator)
    const nameRequest = requestTicket.name
    const findTicket = await Ticket.findByOrFail('name', nameRequest)
    const user = auth.authenticate()
    ;(await user).ticketId = findTicket.id
    return user
  }

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
