var nums = [5, 2, 7, 9, 15, 22, 36];
// Return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(num) {
  return num > 5;
}

function fiveFilter() {
  return nums.filter(fiveAndGreaterOnly);
}
console.log(fiveFilter());

//Return a new array that only includes the even numbers.
var nums = [5, 2, 7, 9, 15, 22, 36];
function evenNums(num) {
  return num % 2 === 0;
}

// function evenFilter() {
//   return nums.filter(evenNums);
// }
// console.log(evenFilter());

console.log(nums.filter(evenNums));

//Return a new array that only includes those that are 5 characters or fewer in length.
var arr = ["dog", "wolf", "by", "family", "eaten", "camping"];

function fiveCharactersOrFewerOnly(str) {
  return str.length <= 5;
}

console.log(arr.filter(fiveCharactersOrFewerOnly));

//Return a new array that has filtered out all those who don't belong to the club.
var peopleWhoBelongToTheIlluminati = [
  {
    name: "Angelina Jolie",
    member: true
  },
  {
    name: "Eric Jones",
    member: false
  },
  {
    name: "Paris Hilton",
    member: true
  },
  {
    name: "Kayne West",
    member: false
  },
  {
    name: "Bob Ziroll",
    member: true
  }
];

function trueMembers(object) {
  return object.member === true;
}

console.log(peopleWhoBelongToTheIlluminati.filter(trueMembers));

//Filter out all the people who are not old enough to see The Matrix (younger than 18)
var ofAge = [
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

function belowEighteen(object) {
  return object.age < 18;
}

console.log(ofAge.filter(belowEighteen));
