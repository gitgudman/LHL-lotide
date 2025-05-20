const assertArraysEqual = require("../assertArraysEqual");

// Testing
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]); // fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // fail
assertArraysEqual([], []);
assertArraysEqual([1], [1, 2]); // fail