import { Router } from 'express'

const router = new Router()

router.get('/', async (req, res, next) =>  {
  res.json({
    hello: 'world'
  })
})

export default router
