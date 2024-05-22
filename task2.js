const words = [
  "arrowf",
  "action",
  "javascript",
  "html",
  "css",
  "it",
  "go",
  "apple",
  "airplane",
  "and",
];

function aWords(array) {
  return array.filter((word) => word.startsWith("a")).length;
}
console.log(aWords(words));

// also good:

// function counterAWords([...args]) {
//   let counter = 0;
//   for (const arg of args) {
//     if (arg.indexOf("a") === 0) {
//       counter++;
//     }
//   }
//   return counter;
// }

// console.log(counterAWords(words));

// also good:

// let aWords = [];

// for (const word of words) {
//   if (word.indexOf("a") === 0) {
//     aWords.push(word);
//   }
// }

// console.log(aWords.length);

// also good:

// let aWords = [];

// for (const word of words) {
//   if (word.startsWith("a")) {
//     aWords.push(word);
//   }
// }

// console.log(aWords.length);
