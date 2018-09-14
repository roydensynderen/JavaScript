function arbitraryPractice(arr) {
  //check for age
  var sortedByAge = arr.filter(function(person) {
    return person.age > 20;
  });

  return sortedByAge.reduce(function(accumulator, person) {
    //check for nicknames
    var hasNicknames = person.pets.every(function(pet) {
      return pet.nickNames.length;
    });
    //check for dogs
    var hasADog = person.pets.some(function(pet) {
      return pet.type === "dog";
    });
    if (hasNicknames && hasADog) {
      var liTags = person.pets.map(function(pet) {
        //convert names to li's
        return "<li>" + pet.name + "<li>";
      });
      return accumulator.concat(liTags);
    } else {
      return accumulator;
    }
  }, []);
}

module.exports = arbitraryPractice;
