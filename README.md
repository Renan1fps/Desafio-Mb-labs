# Desafio-Mb-labs
# Event management app

### Overview
#### Build a back-end application that people can access to search for events from companies and universities.

## Index

  1. [Build Setup](#build)
  2. [Routes](#routes)
  3. [Requirements analysis](#requirements-analysis)
  4. [Users](#users)

  
 

## Build Setup

Install [Docker Compose](https://docs.docker.com/compose/install/).

```bash
# Create container with MySQL
$ docker-compose up -d

# Create database structure
$ node ace migration:run

# install dependencies
$ npm install

# server with changes watcher
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start
```

## Routes
```bash

#auth
$ post: http://localhost:3333/users
$ delete: http://localhost:3333/users

#event
$ get: http://localhost:3333/events
$ get by id: http://localhost:3333/events/:id
$ post: http://localhost:3333/events
$ put: http://localhost:3333/events/:id
$ delete: http://localhost:3333/events:id

#user:
$ get: http://localhost:3333/users
$ get by id: http://localhost:3333/users/:id
$ post: http://localhost:3333/users
$ put: http://localhost:3333/users/:id
$ delete: http://localhost:3333/users/:id

#ticket:
$ get: http://localhost:3333/tickets
$ get by id: http://localhost:3333/tickets/:id
$ post: http://localhost:3333/tickets
$ put: http://localhost:3333/tickets/:id
$ delete: http://localhost:3333/tickets/:id

#buyticket:
$ get: http://localhost:3333/buyticket
$ post: http://localhost:3333/tickets
```
## Requirements analysis 
```bash
Functional Requirements
# Authentication: To buy tickets user already registered can log in to the platform so you can make the purchase of tickets. otherwise you will have to register.
# User registration: The user can register in the system, then be able to buy tickets for events.
# Search for events: Anyone who accesses the system will be able to view the available events and then search for tickets to the event.
# Permissions: Only administrators can register, delete or update events, tickets, and users.
```
## Users
#### You can test the system with administrator permission using the following credential:
```bash
{
	"email":"mblabs@gmail.com",
	"password": "mblabs"
}
```
## Attention ⚠️
### it is recommended to use insomnia to perform the tests
#### when performing authentication the system returns a token in which you have to put in the header of your requests. How to show below
```bash
{
  "type": "bearer",
  "token": "Mg.XUXuxIEGNpgXhcjGMtA5Ln78-Q3gQ_a25lJd08YOsLgX6O_rb84w6l_staT1",
  "expires_at": "2021-06-08T16:19:19.340-03:00"
}
```
### in the header of your request you will put in the n field new header Authorization and in the value you will place the token as follows:
```bash
bearer Mg.XUXuxIEGNpgXhcjGMtA5Ln78-Q3gQ_a25lJd08YOsLgX6O_rb84w6l_staT1
```
## json of requisitions
```bash
#post events

{
	"data": "08/06/2021",
	"description": "descrição de admin",
    "name": "teste nao autenticado",
    "place": "campinas" 
  }
 #update events
 {
    "name": "teste  up admin",
    "description": "teste de update",
    "place": "campinas",
    "data": "08/06/2021"
  }
  #post tickets
  {
	"name":"teste",
	"price": 60,
	"eventId":"teste de admin" -> you need to pass the name of an existing event
}
#update tickets
{
	"name":"ticket update admin",
	"price": 37,
	"eventId": 1 -> you need to pass the right event id
}
#post auth
{
	"email":"mblabs@gmail.com",
	"password": "mblabs"
}
#post users
{
	"email": "mblabs@gmail.com",
	"password":"mblabs",
	"phoneNumber":"99999-8888"
}
#update users ->
{
	"email": "testedeupgmail.com",
	"password":"password",
	"phoneNumber":"54321486"
}
#post buyticket
{
	"name": "teste admin"
}

