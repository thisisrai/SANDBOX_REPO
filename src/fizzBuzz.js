export default function fizzBuzz() {

  let hundredArr = []

  for(var i = 1; i < 101; i++) {
    if( i % 15 === 0) {
      hundredArr.push('FizzBuzz')
    }
    else if ( i % 3 === 0) {
      hundredArr.push('Fizz')
    }
    else if ( i % 5 === 0) {
      hundredArr.push('Buzz')
    } else {
      hundredArr.push(i);
    }
  }

  return hundredArr; 

}
