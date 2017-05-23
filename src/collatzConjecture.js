export default function collatzConjecture(integer) {

  if(integer <= 0) {
    return 'INVALID INPUT'
  }

  let collatzArr = [integer]

  while (collatzArr[collatzArr.length - 1] !== 1){
    if (collatzArr[collatzArr.length - 1] % 2 === 0) {
      collatzArr.push(collatzArr[collatzArr.length - 1] / 2)
    } else {
      collatzArr.push(3*collatzArr[collatzArr.length - 1] + 1)
    }
  }

  return collatzArr

}
