import { Request, Response } from 'express'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'

const validateOptions = {
  abortEarly: false, // include all errors
  presence: 'required'
}

const formatError = (error: any, source: unknown): object => {
  const { details } = error
  const message = details.map((item: any) => item.message).join('. ')
  const keys = details.map((item: any) => item.context.key)

  return {
    errors: [{
      status: StatusCodes.BAD_REQUEST,
      title: ReasonPhrases.BAD_REQUEST,
      details: message,
      validation: {
        source,
        keys
      }
    }]
  }
}

export const validate = (schema: any) => {
  return (req: Request, res: Response, next: Function) => {
    if (schema.params !== undefined) {
      const { error } = schema.params.validate(req.params, validateOptions)

      if (error === undefined) {
        next()
      } else {
        res.status(StatusCodes.BAD_REQUEST).json(formatError(error, 'params'))
      }

      return
    }

    const { error } = schema.payload !== undefined ? schema.payload.validate(req.body, validateOptions) : null

    if (error === undefined) {
      next()
    } else {
      res.status(StatusCodes.BAD_REQUEST).json(formatError(error, 'payload'))
    }
  }
}
