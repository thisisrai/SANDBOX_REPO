export default function isPalindrome(word) {

  let regexFilter = /[a-zA-Z]+/gi;
  let filteredWord = word.match(regexFilter).join('').toLowerCase();

  return filteredWord === filteredWord.split('').reverse().join('');

}
