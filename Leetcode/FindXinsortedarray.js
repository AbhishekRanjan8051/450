// brute force
// T.C = O(N)

function search(arr, k) {
  // let result = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
      return i;
    }
  }
}
let arr = [1, 2, 5, 8, 9, 15, 22, 59, 66];
let k = 59;
let result = search(arr, k);
console.log(result);

// using binary search
// T.C = O(logN)

function binarySearch(arr, k) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (k < arr[mid]) {
      end = mid - 1;
    } else if (arr[mid] < k) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
}

let data = [1, 2, 5, 8, 9, 15, 22];
let x = 55;
let final = binarySearch(data, x);
console.log("final:", final);
