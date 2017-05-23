export default function setUnion(a, b) {

  if(!(a instanceof Array) || !(b instanceof Array)) {
    return 'INVALID INPUT'
  }

  let unionArr = a;

  for(var i = 0; i < b.length; i++){
    if(!(unionArr.includes(b[i]))) {
      unionArr.push(b[i]);
    }
  }

  return unionArr

}
