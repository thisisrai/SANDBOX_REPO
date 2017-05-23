export default function setIntersection(a, b){

  if(!(a instanceof Array) || !(b instanceof Array)) {
    return 'INVALID INPUT'
  }

  let intersectionArr = []

  for(var i = 0; i < b.length; i++) {
    if(a.includes(b[i]) && !(intersectionArr.includes(b[i]))) {
      intersectionArr.push(b[i])
    }
  }

  return intersectionArr

}
