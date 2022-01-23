'use strict';

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

// loop over bills to get bill
for (const bill of bills) {
  // calcTip for bill
  const calcTip = () => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);
  // push to tips
  tips.push(calcTip());

  // calcTotal for bill
  //push to totals
  totals.push(calcTip() + bill);
}

console.log(bills);
console.log(tips);
console.log(totals);

function calcAverage(arr) {
  let sum = 0;
  arr.forEach(val => (sum += val));
  return sum / arr.length;
}

console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(totals));
