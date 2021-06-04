import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class CreateUsers extends BaseSeeder {
  public async run() {
    await User.createMany([
      { email: 'mblabs@gmail.com', phoneNumber: '996901491', password: 'mblabs', role: 'admin' },
      { email: 'user@gmail.com', phoneNumber: '999998888', password: 'user', role: 'normal' },
    ])
  }
}
