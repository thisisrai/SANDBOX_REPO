import { expect } from 'chai'
import fibonacci from '../src/fibonacci'

describe('fibonacci()', () => {

  it('should be a function', () => {
    expect(fibonacci).to.be.a('function')
  })

  it('should return correct fibonacci sequence', () => {
    expect(fibonacci(10)).to.deep.equal([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
  })

  it('return invalid input if not a number', () => {
    console.log(fibonacci("hello"))
    expect(fibonacci('Hello')).to.deep.equal('INVALID INPUT')
  })

})
