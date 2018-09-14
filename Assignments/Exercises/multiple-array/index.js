var people = [
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47
  },
  {
    firstName: "Frank",
    lastName: "Zappa",
    age: 12
  },
  {
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78
  },
  {
    firstName: "Morty",
    lastName: "Smith",
    age: 13
  },
  {
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27
  }
];

function sortByLNameFilterByAge(arr) {
  //filter by last name
  var sorted = arr.sort(function(person1, person2) {
    return person1.lastName.localeCompare(person2.lastName);
  });
  //filter by age
  var filteredAndSorted = sorted.filter(function(person) {
    return person.age >= 18;
  });
  return filteredAndSorted;
}

console.log(sortByLNameFilterByAge(people));
