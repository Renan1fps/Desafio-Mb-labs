import Route from '@ioc:Adonis/Core/Route'

Route.resource('/buyticket', 'BuyTicketsController').apiOnly()
