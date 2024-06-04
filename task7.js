const numbers = [
  100, 11, 11, 100, 100, 22, 33, 44, 100, 55, 66, 77, 88, 99, 100, 100, 11, 100,
  22, 100, 99, 100,
];

function largestNumber(array) {
  const largestNumber = Math.max(...array);
  let counter = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] == largestNumber) {
      counter++;
    }
  }

  console.log(`Largest Number: ${largestNumber}, times: ${counter}`);
}

largestNumber(numbers);
