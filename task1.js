const numbersGo = [2, 4, 44, 28, 3, 5, 8, 23, 9];
let evenNumbers = [];

for (let i = 0; i < numbersGo.length; i++) {
  if (numbersGo[i] % 2 === 0) {
    evenNumbers.push(numbersGo[i]);
  }
}

// also good:

// for (const number of numbersGo) {
//   if (number % 2 === 0) {
//     evenNumbers.push(number);
//   }
// }

const evenNumbersSum = evenNumbers.reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

console.log(evenNumbersSum);
