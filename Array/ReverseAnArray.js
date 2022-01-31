let data = "string";

// write a brute force method
function reverseAnArray(data) {
  // take a empty string where we put reverse array

  let result = "";

  // run a loop from last to start
  for (let i = data.length - 1; i >= 0; i--) {
    result += data[i];
  }
  return result;
}

let reverse = reverseAnArray(data);
console.log("reverse:", reverse);

// write a predefined method;

function reverseAnArray2(data) {
  // first we have to split on bases of space
  // and then reverse it by using reverse method
  // and again join on the bases of space
  let result = data.split("").reverse().join("");
  return result;
}

let predefinedreverse = reverseAnArray2(data);
console.log("predefinedreverse:", predefinedreverse);

//  by using recursion method

function reverserecursive(data) {
  if (data == "") {
    return "";
  } else {
    return reverserecursive(data.substr(1)) + data.charAt(0);
  }
}

let reverserecurssion = reverserecursive(data);
console.log('reverserecurssion:', reverserecurssion)

