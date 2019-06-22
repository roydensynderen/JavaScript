var assert = require("chai").assert;
var arbitraryPractice = require("../index2.js");

var testCase = [
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47,
    pets: [
      {
        name: "Alfred",
        type: "dog",
        nickNames: ["Lil Alfred", "Alfy", "Alfinator"]
      },
      {
        name: "Charles",
        type: "cat",
        nickNames: ["Charley"]
      },
      {
        name: "Bark Obama",
        type: "dog",
        nickNames: ["Barack", "Mr. President"]
      },
      {
        name: "Christopher George Latore Wallace",
        type: "dog",
        nickNames: ["Notorious D.I.G.", "Diggie Smalls"]
      }
    ]
  },
  {
    firstName: "Frank",
    lastName: "Zappa",
    age: 12,
    pets: [
      {
        name: "Howard",
        type: "dog",
        nickNames: []
      },
      {
        name: "Bear",
        type: "dog",
        nickNames: []
      }
    ]
  },
  {
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78,
    pets: [
      {
        name: "Bird Person",
        type: "bird",
        nickNames: ["Phoenixperson"]
      },
      {
        name: "Krombopulos Michael",
        type: "Gromflomite",
        nickNames: ["Assassin man"]
      },
      {
        name: "Squanchy",
        type: "Cat-person",
        nickNames: ["Squanch", "Smarf", "Thunder Cat"]
      }
    ]
  },
  {
    firstName: "Morty",
    lastName: "Smith",
    age: 23,
    pets: [
      {
        name: "Morty Jr.",
        type: "Gazorpazorp",
        nickNames: ["Gwendolyn Jr."]
      },
      {
        name: "Snuffels",
        type: "dog",
        nickNames: ["Snowball"]
      }
    ]
  }
];

var expected = [
  "<li>Alfred</li>",
  "<li>Charles</li>",
  "<li>Bark Obama</li>",
  "<li>Christopher George Latore Wallace</li>",
  "<li>Morty Jr.</li>",
  "<li>Snuffels</li>"
];

var expected = describe("Testing dogOwner function", function() {
  it("should return an array that meets the requirements", function() {
    assert.deepEqual(sortedDogOwners(testCase), expected);
  });
});
