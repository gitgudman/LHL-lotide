// eqArrays function copied
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  
  return true;
};
  
// assertArraysEqual function copied
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};
  
// flatten function, 1 function hense flatten
const flatten = function(array) {
  const result = [];
  
  for (let item of array) {
    if (Array.isArray(item)) {
      for (let nestedItem of item) {
        result.push(nestedItem);
      }
    } else {
      result.push(item);
    }
  }
  
  return result;
};
  
// Test
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);