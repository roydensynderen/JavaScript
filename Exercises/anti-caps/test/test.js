var assert = require("chai").assert;
//Chai access test.js, so we need to import func
//import func from index.js
var antiCaps = require("../index.js");

var testCases = ["", "abc", "ABC", "AbC"];
//describe(msg, func);
describe("Testing anti-caps", function() {
  it("should return empty str", function() {
    assert.equal(antiCaps(testCases[0]), "");
  });
  it("should return ABC", function() {
    assert.equal(antiCaps(testCases[1]), "ABC");
  });
  it("should return abc", function() {
    assert.equal(antiCaps(testCases[2]), "abc");
  });
  it("should return aBc", function() {
    assert.equal(antiCaps(testCases[3]), "aBc");
  });
});
