const assertEqual = require("../assertEqual");
const tail = require("../tail");

// Testing
const result = tail(["Hello", "Lighthouse", "Labs"]);

assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

assertEqual(tail([]).length, 0);

assertEqual(tail(["onlyOne"]).length, 0);
