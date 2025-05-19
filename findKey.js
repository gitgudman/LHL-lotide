// Copied assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
  
// findKey function
const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};
  
// Testing
const result1 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
);
assertEqual(result1, "noma");
  
const result2 = findKey(
  {
    Alpha: { rating: 5 },
    Beta: { rating: 3 },
    Gamma: { rating: 4 },
  },
  (x) => x.rating === 4
);
assertEqual(result2, "Gamma");
  
const result3 = findKey(
  {
    One: { status: "fail" },
    Two: { status: "fail" },
    Three: { status: "fail" },
  },
  (x) => x.status === "pass"
);
assertEqual(result3, undefined);
  