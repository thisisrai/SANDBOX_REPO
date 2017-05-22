import { expect } from 'chai'
import fizzBuzz from '../src/fizzBuzz'

describe('fizzBuzz()', () => {

  it('should be a function', () => {
    expect(fizzBuzz).to.be.a('function')
  })

  it('should return the correct values', () => {

    expect(fizzBuzz()[2]).to.deep.equal('Fizz')

    expect(fizzBuzz()[4]).to.deep.equal('Buzz')

    expect(fizzBuzz()[89]).to.deep.equal('FizzBuzz')

  })

})
