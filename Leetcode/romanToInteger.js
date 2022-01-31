function romanToInteger(data) {
  const numeral = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let total = 0;
  let current,
    last = 0;
  data
    .split("")
    .reverse()
    .forEach((e) => {
      current = numeral[e];
      if (current >= last) {
        total += current;
      } else {
        total -= current;
      }
      last = current;
    });
  return total;
}

let roman = "XXX";
let final = romanToInteger(roman);
console.log(final);

