let arr = [2, 3, 1, 4, 4, 2, 3];

function duplicate(data) {
  let result = [];
  let duplicates = [];
  let obj = {};
  if (data.length == 0 || data.length == 1) {
    return -1;
  }

  for (let i = 0; i < data.length; i++) {
    if (!obj[data[i]]) {
      obj[data[i]] = true;
      result.push(data[i]);
    } else {
      duplicates.push(data[i]);
    }
  }
  return duplicates;
}

let final = duplicate(arr);
console.log(final);
