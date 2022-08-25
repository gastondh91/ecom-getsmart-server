const {
  NODE_ENV,
  MONGODB_PRODUCTION_LOGIN_STRING,
  MONGODB_DEVELOPMENT_LOGIN_STRING,
  GET_SMART_DEFAULT_DATABASE_NAME,
  CLIENT_PATH_IN_DEVELOPMENT,
  CLIENT_PATH_IN_PRODUCTION,
  DEFAULT_HOST_IN_DEVELOPMENT,
  DEFAULT_HOST_IN_PRODUCTION,
  DEFAULT_PORT_IN_DEVELOPMENT,
  DEFAULT_PORT_IN_PRODUCTION,
  MONGO_DB_ENV
} = process.env

const developmentNodeMode = NODE_ENV === 'development'
const develomentMongoDbMode = MONGO_DB_ENV === 'development'

const mongoDBSettings = {
  connectionString: {
    PRODUCTION: MONGODB_PRODUCTION_LOGIN_STRING,
    DEVELOPMENT: MONGODB_DEVELOPMENT_LOGIN_STRING
  },
  DATABASE_NAME: GET_SMART_DEFAULT_DATABASE_NAME
}

export const MONGO_DATABASE_CONECTION_URL = develomentMongoDbMode
  ? mongoDBSettings.connectionString.DEVELOPMENT
  : mongoDBSettings.connectionString.PRODUCTION

export const GET_SMART_DATABASE = mongoDBSettings.DATABASE_NAME

export const port = developmentNodeMode
  ? DEFAULT_PORT_IN_DEVELOPMENT
  : DEFAULT_PORT_IN_PRODUCTION

export const clientBuildPath = process.env.CLIENT_BUILD_PATH

export const host = developmentNodeMode
  ? `${DEFAULT_HOST_IN_DEVELOPMENT}${port}`
  : `${DEFAULT_HOST_IN_PRODUCTION} ${port}`
