// @flow
import { Router } from 'express'

import type { NextFunction } from 'express' // eslint-disable-line

const router = new Router()

router.get('/', async (req: any, res: any, next: NextFunction): Promise<void> => {
  try {
    res.send('Hello World')
  } catch (e) {
    next(e)
  }
})

export default router
