module.exports = {
  type: process.env.DATABASE_TYPE,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: false,
  logging: process.env.NODE_ENV === 'development',
  entities: [
    process.env.ORM_ENTITIES_PATH
  ],
  migrations: [
    process.env.ORM_MIGRATIONS_PATH
  ],
  subscribers: [
    process.env.ORM_SUBSCRIBERS_PATH
  ],
  cli: {
    migrationsDir: process.env.ORM_MIGRATIONS_DIR,
    subscribersDir: process.env.ORM_SUBSCRIBERS_DIR
  }
}
