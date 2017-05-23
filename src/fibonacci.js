export default function fibonacci(nth) {

  let fibonacciArr = [0, 1]

  if(isNaN(nth) || nth === 0){
    return 'INVALID INPUT'
  }
  else if( nth === 1 ) {
    return [0]
  }
  else if( nth === 2 ) {
    return initialArr
  } else {

    for(var i = 1; i < nth - 1 ; i++) {
      fibonacciArr.push(fibonacciArr[i-1] + fibonacciArr[i])
    }

  }
  return fibonacciArr
}
