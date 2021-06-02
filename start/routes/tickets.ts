import Route from '@ioc:Adonis/Core/Route'

Route.resource('/tickets', 'TicketsController').apiOnly()
