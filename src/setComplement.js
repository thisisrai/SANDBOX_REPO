export default function setComplement(a, b) {

  if(!(a instanceof Array) || !(b instanceof Array)) {
    return 'INVALID INPUT'
  }

  let complementArr = a

  for(var i = 0; i < b.length; i++) {
    if(!complementArr.includes(b[i])) {
      complementArr.push(b[i])
    }
  }

  return complementArr

}
