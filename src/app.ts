import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

import { router as routes } from './api/v1.0'

export const app = express()

// for parsing application/json
app.use(express.json())

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// secure apps by setting various HTTP headers
app.use(helmet())

// enable CORS - Cross Origin Resource Sharing
app.use(cors())

// mount api v1 routes
app.use('/v1.0', routes)
