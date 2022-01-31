function romanize(num) {
  var romaninters = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    },
    roman = "",
    i;
  for (i in romaninters) {
    while (num >= romaninters[i]) {
      roman += i;
      num -= romaninters[i];
    }
  }
  return roman;
}

let n = 10;
let final = romanize(n);
console.log(final);
