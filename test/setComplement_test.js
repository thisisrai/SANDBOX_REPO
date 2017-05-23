import { expect } from 'chai'
import setComplement from '../src/setComplement'

describe('setComplement()', () => {

  it('should be a function', () => {
    expect(setComplement).to.be.a('function')
  })

  it('should return correct complement and handle incorrect inputs', () => {

    expect(setComplement([1, 2, 3, 4], [2, 4, 6, 8])).to.deep.equal([1, 2, 3, 4, 6, 8])

    expect(setComplement([1, 2, 3, 4], [2, 4, 3, 3])).to.deep.equal([1, 2, 3, 4])

    expect(setComplement([1, 2, 3, 4], 'Hello')).to.deep.equal('INVALID INPUT')

  })

})
