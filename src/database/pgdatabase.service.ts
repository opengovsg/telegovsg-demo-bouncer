import Pool from 'pg-pool'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Postgres } from '@telegraf/session/pg'
import { DatabaseService } from './database.service'
import { Client } from 'pg'
import { generateDb } from './utils/pg.utils'

@Injectable()
export class PgDatabaseService extends DatabaseService {
  public readonly pool: Pool<Client>

  constructor(private readonly configService: ConfigService) {
    super()

    const { db, pool } = generateDb()

    this.pool = pool
    this.store = Postgres({ pool })
    this.bouncerStore = db
  }
}
