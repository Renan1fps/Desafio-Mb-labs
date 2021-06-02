import Route from '@ioc:Adonis/Core/Route'
Route.resource('/events', 'EventsController')
  .apiOnly()
  .middleware({
    store: ['acl:admin'],
    update: ['acl:admin'],
    destroy: ['acl:admin'],
  })
