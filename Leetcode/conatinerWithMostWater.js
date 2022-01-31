let arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];

// using nested loop
// time complexity = O(n^2)
// space complexity = O(1)

function containerWithMostWater(data) {
  let water = 0;
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      water = Math.max(water, Math.min(data[j], data[i]) * (j - i));
    }
  }
  return water;
}

let cotainer = containerWithMostWater(arr);
console.log(cotainer);

// using two pointer

function watercontainer(data) {
  let start = 0;
  let last = data.length - 1;

  let water = 0;

  while (start < last) {
    water = Math.max(water, Math.min(data[start], data[last]) * (last - start));

    if (data[start] < data[last]) {
      start++;
    } else {
      last--;
    }
  }
  return water;
}

let watercont = watercontainer(arr);
console.log(watercont);
