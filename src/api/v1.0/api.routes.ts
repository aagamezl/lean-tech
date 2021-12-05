import { Request, Response, Router } from 'express'

export const router = Router()

/**
 * GET v1.0/status
 */
router.get('/status', (_: Request, res: Response): void => {
  res.json({ status: 'OK' })
})
