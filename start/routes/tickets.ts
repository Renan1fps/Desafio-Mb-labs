import Route from '@ioc:Adonis/Core/Route'

Route.resource('/tickets', 'TicketsController')
  .apiOnly()
  .middleware({
    store: ['acl:admin'],
    update: ['acl:admin'],
    destroy: ['acl:admin'],
  })
