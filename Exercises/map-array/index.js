// var ints = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function filter(cb, arr) {
//   var output = [];
//   for (var i = 0; i < arr.length; i++) {
//     var element = arr[i];
//     var passesTest = cb(element, i);
//     if (passesTest) output.push(element);
//   }
//   return output;
// }

// function testForEvens(int) {
//   return int % 2 === 0;
// }

// var evens = filter(testForEvens, ints);
// console.log(evens);

// var names = ["Ben", "Maxx", "Taylor", "Chaz", "Nicole"];
// var shortNames = names.filter(function (name, i) {
//   if (name.length < 4) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(shortNames);

// var lowerCaseLtrs = ["a", "b", "c", "d"];
// var capitalLtrs = lowerCaseLtrs.map(function (ltr) {
//   return ltr.toUpperCase();
// });
// console.log(capitalLtrs);

// var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var squares = [];

// nums.forEach(function (num) {
//   squares.push(num * num);
// });
// console.log(squares);

// //SORT
// var words = ["abc", "bcd", "cde", "acdc"];
// var alphabetizedWords = words.sort(function (name1, name2) {
//   return name2.localeCompare(name1);
// });
// console.log(alphabetizedWords.reverse());

// var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// var lowToHiNums = nums.sort(function (num1, num2) {
//   //low to high sorting
//   return num1 - num2;
// });
// console.log(lowToHiNums);

// var sum = nums.reduce(function (accumulator, num) {
//   return (accumulator += num);
// });
// console.log(sum);

// var totalAges = people.reduce(function(accumulator, person) {
//   return (accumulator += person.age);
// }, 0);
// console.log(totalAges);

// var average = people.reduce(function(accumulator, person) {
//   if (accumulator[person.age.toString()]) {
//     accumulator[person.age.toString()] = 1;
//   }
//   return accumulator;
// }, {});

// console.log(average);


//Make an array of numbers that are doubles of the first array
var array = [2, 5, 100];
function doubleNumbers(arr) {
  return arr * 2
}
// console.log(array.map(doubleNumbers));

//Take an array of numbers and make them strings
function stringify(arr) {
  return arr.toString();
}
// console.log(array.map(stringify));

//Capitalize each of an array of names
var capitalizeNames = ["john", "JACOB", "jinGleHeimer", "schmidt"];
function capitalize(arr) {
  return arr.toUpperCase();
}
// console.log(capitalizeNames.map(capitalize));

//Make an array of strings of the names
var names = [
  {
    name: "Angelina Jolie",
    age: 80
  },
  {
    name: "Eric Jones",
    age: 2
  },
  {
    name: "Paris Hilton",
    age: 5
  },
  {
    name: "Kayne West",
    age: 16
  },
  {
    name: "Bob Ziroll",
    age: 100
  }
];

function namesOnly(arr) {
  return arr.name;
}

// console.log(names.map(namesOnly));

//Make an array of strings of the names saying whether or not they can go to The Matrix
var people = [
  {
    name: "Angelina Jolie",
    age: 80
  },
  {
    name: "Eric Jones",
    age: 2
  },
  {
    name: "Paris Hilton",
    age: 5
  },
  {
    name: "Kayne West",
    age: 16
  },
  {
    name: "Bob Ziroll",
    age: 100
  }
];

function canGo(arr) {
  if (arr.age > 18) {
    return `${arr.name} can go to The Matrix`
  } else {
    return `${arr.name} is under age!!`
  }
}

// console.log(people.map(canGo));

//Make an array of the names in h1s, and the ages in h2s
function readyToPutInDOM(arr) {
  return `<h1>${arr.name}</h1><h2>${arr.age}</h2>`;
}

console.log(people.map(readyToPutInDOM));
