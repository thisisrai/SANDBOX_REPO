export default function factorial(number) {
  let product = 1;
  while(number > 0) {
    product *= number;
    number --;
  }
  return product
}
