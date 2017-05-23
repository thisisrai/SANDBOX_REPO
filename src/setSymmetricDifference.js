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

  for(var j = 0; j < b.length; j++) {
    if(!a.includes(b[j]) && !symmetricDifferenceArr.includes(b[j])) {
      symmetricDifferenceArr.push(b[j])
    }
  }

  return symmetricDifferenceArr

}
