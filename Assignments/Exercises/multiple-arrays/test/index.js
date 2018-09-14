function sortedDogOwners(arr) {
  return arr
    .sort(function(person1, person2) {
      return person1.age - person2.age;
    })
    .filter(function(person) {
      return person.pets.includes("dog");
    });
}

module.exports = sortedDogOwners;
