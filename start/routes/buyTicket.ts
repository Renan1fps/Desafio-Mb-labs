import Route from '@ioc:Adonis/Core/Route'

Route.resource('/buyticket', 'BuyTicketsController').apiOnly().middleware({
    store: ['auth'],
    update: ['acl:admin'],
    destroy: ['acl:admin'],
  })