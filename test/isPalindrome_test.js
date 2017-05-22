import { expect } from 'chai'
import isPalindrome from '../src/isPalindrome'

describe('isPalindrome()', () => {

  it('should be a function', () => {
    expect(isPalindrome).to.be.a('function')
  })

  it('should correctly find palindromes and reject non palindromes', () => {

    expect(isPalindrome('radar')).to.be.true

    expect(isPalindrome('bananas')).to.be.false

    expect(isPalindrome('A man, a plan, a canal: Panama')).to.be.true

  })

})
