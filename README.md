# Desafio-Mb-labs
# Event management app

### Overview
#### Build a back-end application that people can access to search for events from companies and universities.

## Index

  1. [Build Setup](#build)
  2. [Routes](#routes)
  3. [Requirements analysis](#requirements-analysis)

  
 

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
