#!/usr/bin/env node

import 'reflect-metadata'

import { app } from './app'
import { logger } from './utils/logger'

const port = process.env.port ?? 3000

app.set('port', port)

// Create HTTP server.
const server = app.listen(port, () => {
  logger.info(`Listening at http://localhost:${port}`)
})

// Graceful shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM signal received: closing HTTP server')

  server.close(() => {
    logger.info('HTTP server closed')
  })
})

/**
 * Event listener for HTTP server "error" event.
 */
const onError = (error: any): void => {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string'
    ? `Pipe ${port}`
    : `Port ${port}`

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      logger.error(`${bind} requires elevated privileges`)
      process.exit(1)

    case 'EADDRINUSE':
      logger.error(`${bind} is already in use`)
      process.exit(1)

    default:
      throw error
  }
}

server.on('error', onError)
