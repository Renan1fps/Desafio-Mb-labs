import Route from '@ioc:Adonis/Core/Route'
Route.resource('/events', 'EventsController').apiOnly()