function twoSum(data, k) {
  data.sort(function (a, b) {
    return a - b;
  });

  let result = "";

  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (data[i] + data[j] == k) {
        result = data[i] + " " + data[j];
      }
    }
  }
  return result;
}
let nums = [6, 7, 11,3, 15];
let k = 9

let twosum = twoSum(nums,k);
console.log(twosum);
