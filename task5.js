const numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];

const largestNumber = numbers.sort((a, b) => b - a)[0];

console.log(largestNumber);
