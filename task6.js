const numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];

function largestSmallestNumbers(array) {
  let largestNumber = array[0];
  let smallestNumber = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largestNumber) {
      largestNumber = array[i];
    }
    if (array[i] < smallestNumber) {
      smallestNumber = array[i];
    }
  }
  console.log(largestNumber);
  console.log(smallestNumber);
}

largestSmallestNumbers(numbers);
