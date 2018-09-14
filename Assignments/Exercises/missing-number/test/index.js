var assert = require("chai").assert;
var findMissingNo = require("../index.js");

var testCase1 = [2, 1, 3, 5];
var testCase2 = [12, 10, 9];
var testCase3 = [-3, 0, -2, 3, 2, -1];

var expected1 = 4;
var expected2 = 11;
var expected3 = 1;

describe("Find missing number", function() {
  it("should return missing number", function() {
    assert.equal(findMissingNo(testCase1), expected1);
  });
  it("should return missing number", function() {
    assert.equal(findMissingNo(testCase2), expected2);
  });
  it("should return missing number", function() {
    assert.equal(findMissingNo(testCase3), expected3);
  });
});
