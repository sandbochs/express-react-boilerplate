// @flow
import request from 'supertest'

import app from 'server'

describe('/v1/example', () => {
  describe('GET', () => {
    test('should respond with the correct json', async () => {
      request(app)
        .get('/v1/example')
        .expect(200)
        .then((res) => {
          expect(res.text).toEqual('Hello World')
        })
    })
  })
})
