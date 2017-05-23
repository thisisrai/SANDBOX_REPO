import { expect } from 'chai'
import factorial from '../src/factorial'

describe('factorial()', () => {

  it('should be a function', () => {
    expect(factorial).to.be.a('function');
  })

  it('should output the correct factorial', () => {

    expect(factorial(5)).to.deep.equal(120)

    expect(factorial(3)).to.deep.equal(6)

  })

})
