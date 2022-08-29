const {
  NODE_ENV,
  DEFAULT_HOST_IN_DEVELOPMENT,
  DEFAULT_PORT_IN_DEVELOPMENT,
  DEFAULT_PORT_IN_PRODUCTION,
  DEVELOPMENT_CLIENT_BUILD_PATH,
  PRODUCTION_CLIENT_BUILD_PATH
} = process.env

const developmentNodeMode = NODE_ENV === 'development'

export const port = developmentNodeMode
  ? DEFAULT_PORT_IN_DEVELOPMENT
  : DEFAULT_PORT_IN_PRODUCTION

export const clientBuildPath = developmentNodeMode
  ? DEVELOPMENT_CLIENT_BUILD_PATH
  : PRODUCTION_CLIENT_BUILD_PATH

export const host = developmentNodeMode
  ? `${DEFAULT_HOST_IN_DEVELOPMENT}${port}`
  : `port ${port}`
