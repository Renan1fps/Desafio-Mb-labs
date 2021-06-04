import Route from '@ioc:Adonis/Core/Route'

Route.resource('/users', 'UsersController.ts').apiOnly()