import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class CreateUsersSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      { email: 'mblabs@gmail.com', password: 'mblabs', role: 'admin' },
      { email: 'user@gmail.com', password: 'user', role: 'normal' },
    ])
  }
}
