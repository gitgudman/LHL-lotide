// Copied assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
  
// tail function
const tail = function(array) {
  return array.slice(1); // returns new array starting from index 1
};
  
// Test scenarios
  
// Scenario 1: Different assertions
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
  
// Scenario 2: Empty array input
const result2 = tail([]);
assertEqual(result2.length, 0);
  
// Scenario 3: Single element array
const result3 = tail(["OnlyOne"]);
assertEqual(result3.length, 0);
  
// Scenario 4: Original array unmodified
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
  