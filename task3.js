const cities = [
  "Oradea",
  "Arad",
  "Oradea",
  "Arad",
  "Cluj",
  "Arad",
  "Bucuresti",
];

function countWords(array) {
  const count = {};

  array.forEach((element) => {
    if (count[element]) {
      count[element]++;
    } else {
      count[element] = 1;
    }
  });

  for (const [key, result] of Object.entries(count)) {
    console.log(`${key}: ${result}`);
  }
}

countWords(cities);
