var assert = require("chai").assert;
var sortedDogOwners = require("../index.js");

var testCase = [
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47,
    pets: ["dog", "cat"]
  },
  {
    firstName: "Frank",
    lastName: "Zappa",
    age: 12,
    pets: ["dog"]
  },
  {
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78,
    pets: ["cat", "parrot"]
  },
  {
    firstName: "Morty",
    lastName: "Smith",
    age: 13,
    pets: ["cat", "parrot", "dog"]
  },
  {
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27,
    pets: ["dog"]
  }
];

var expected = describe("Testing dogOwner function", function() {
  it("should return an array filtered by # of dogs, sorted by owner age", function() {
    assert.deepEqual(sortedDogOwners(testCase), expected);
  });
});
