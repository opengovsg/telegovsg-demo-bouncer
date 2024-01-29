import { config } from 'dotenv'
import { executeMigration, generateDb } from './pg.utils'

config()

const migrateToLatest = async () => {
  const { db } = generateDb()

  await executeMigration(db)

  await db.destroy()
}

migrateToLatest()
