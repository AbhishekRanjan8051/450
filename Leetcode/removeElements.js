function removeelement(data, k) {
  if (data.length == 0) {
    return 0;
  }
  let j = 0;
  let result = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] == k) {
        result.push(data[i]);
    }
  }

  return (data.length-result.length)
}

let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let k = 2;
let final = removeelement(nums, k);
console.log("final:", final);
