const should = require('should')
const server = require('./server')

describe('server test suite', () => {
  it('should return "Hello world', () => {
    server().should.be.equal('Hello world')
  })
})


