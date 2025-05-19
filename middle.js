const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  
  return true;
};
  
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};
  
// Middle function
const middle = function(array) {
  const len = array.length;
  
  if (len <= 2) return [];
  
  const mid = Math.floor(len / 2);
  
  if (len % 2 === 0) {
    return [array[mid - 1], array[mid]];
  } else {
    return [array[mid]];
  }
};
  
// Testing
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle(["a", "b", "c"]), ["b"]);
  