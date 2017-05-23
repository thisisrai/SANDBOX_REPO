import { expect } from 'chai'
import setUnion from '../src/setUnion'

describe('setUnion()', () => {

  it('should be a function', () => {
    expect(setUnion).to.be.a('function')
  })

  it('should return the correct union and handle invalid inputs', () => {

    expect(setUnion([1, 2, 3, 4], [2, 4, 6, 8])).to.deep.equal([1, 2, 3, 4, 6, 8])

    expect(setUnion([1, 2, 3, 4], [2, 4])).to.deep.equal([1, 2, 3, 4])

    expect(setUnion([1, 2, 3, 4], 'Hello')).to.deep.equal('INVALID INPUT')

  })



})
