let arr = [1, 1, 3, 4, 3, 2];

function removeDuplicatefromArray(data) {
  data.sort(function (a, b) {
    return a - b;
  });
  let n = data.length;

  let result = [];
  if (n == 0 || n == 1) {
    return n;
  }
  let obj = {};
    let resultss = [];

  for (let i = 0; i < n; i++) {
    if (!obj[data[i]]) {
      obj[data[i]] = true;
      result.push(data[i]);
    }
  }
  return result;
}

let result = [...new Set(arr)];
console.log(result);

let final = removeDuplicatefromArray(arr);
console.log(final);
