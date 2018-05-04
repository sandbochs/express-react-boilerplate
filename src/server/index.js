// @flow
import bodyParser from 'body-parser'
import express from 'express'
import path from 'path'

import { port } from 'config'
import v1 from 'routers/v1'

const app = express()

// client
app.use(express.static(path.resolve(__dirname, './../../')))

// middleware
app.use(bodyParser.json())
app.use(bodyParser.text())

// routes
app.use('/v1', v1)

app.listen(port, () => {
  console.log(`Now listening on ${port}`) // eslint-disable-line
})

export default app
