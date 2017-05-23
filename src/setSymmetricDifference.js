export default function setSymmetricDifference(a, b) {

  if(!(a instanceof Array) || !(b instanceof Array)) {
    return 'INVALID INPUT'
  }

  let symmetricDifferenceArr = []

  for(var i = 0; i < a.length; i++) {
    if(!b.includes(a[i]) && !symmetricDifferenceArr.includes(a[i])) {
      symmetricDifferenceArr.push(a[i])
    }
  }

  for(var i = 0; i < b.length; i++) {
    if(!a.includes(b[i]) && !symmetricDifferenceArr.includes(b[i])) {
      symmetricDifferenceArr.push(b[i])
    }
  }

  return symmetricDifferenceArr

}
