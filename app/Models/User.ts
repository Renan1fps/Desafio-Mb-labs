import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Ticket from './Ticket'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column()
  public phoneNumber?: string

  @column()
  public ticketId?: number

  @belongsTo(() => Ticket, { foreignKey: 'ticket_id' })
  public ticket: BelongsTo<typeof Ticket>

  @column({ serializeAs: null })
  public password: string

  @column({ serializeAs: null })
  public role: 'admin' | 'normal'

  @column({ serializeAs: null })
  public rememberMeToken?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
