var array = [1, 3, 5, 2, 90, 20];

//smallest to largest
var smallToLarge = array.sort(function(a, b) {
  return a - b;
});
console.log(smallToLarge);

//Largest to smallest
var largeToSmall = array.sort(function(a, b) {
  return b - a;
});
console.log(largeToSmall);

//Short string to longest
var stringArray = ["dog", "wolf", "by", "family", "eaten"];
var lengthSort = stringArray.sort(function(a, b) {
  return a.length - b.length;
});
console.log(lengthSort);

//Sort alphabetically
var stringArray2 = ["dog", "wolf", "by", "family", "eaten"];
var sortAlphabetically = stringArray2.sort();
console.log(sortAlphabetically);

//Sort objects in array by age
var people = [
  {
    name: "Quiet Samurai",
    age: 22
  },
  {
    name: "Arrogant Ambassador",
    age: 100
  },
  {
    name: "Misunderstood Observer",
    age: 2
  },
  {
    name: "Unlucky Swami",
    age: 77
  }
];

var sortByAge = people.sort(function(a, b) {
  return a.age - b.age;
});
console.log(sortByAge);
