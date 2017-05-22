export default function makeChange({price, amountGiven}) {

  if(amountGiven < price) {
    return "INSUFFICIENT FUND";
  }
  let change = amountGiven - price;
  let coins = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
  }

  while(change > 25){
    coins.quarters ++;
    change -= 25;
  }
  while(change >= 10){
    coins.dimes ++;
    change -= 10;
  }
  while(change >= 5){
    coins.nickels ++;
    change -= 5;
  }
  coins.pennies = change;

  return coins;
}
