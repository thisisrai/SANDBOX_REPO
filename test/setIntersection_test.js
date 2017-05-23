import { expect } from 'chai'
import setIntersection from '../src/setIntersection'

describe('setIntersection()', () => {

  it('should be a function', () => {
    expect(setIntersection).to.be.a('function')
  })

  it('should return correct intersection and handle incorrect inputs', () => {

    expect(setIntersection([1, 2, 3, 4], [2, 4, 6, 8])).to.deep.equal([2, 4])

    expect(setIntersection([1, 2, 3, 4], [2, 4, 3, 3])).to.deep.equal([2, 4, 3])

    expect(setIntersection([1, 2, 3, 4], 'Hello')).to.deep.equal('INVALID INPUT')

  })

})
