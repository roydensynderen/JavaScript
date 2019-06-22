var people = [  
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

  for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
      if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
          console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max");
      } else {
          console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max");
      }
  }

  for (var i = 0; i < people.length; i++) {
    if (people[i].age > 18 && people[i].gender === "male") {
        console.log(people[i].name + " is old enough. HE's good to see Mad Max Fury Road.");
    } else if (people[i].age > 18 && people[i].gender === "female") {
        console.log(people[i].name + " is old enough. SHE's good to see Mad Max Fury Road.");
    } else if (people[i].age = 18 && people[i].gender === "male") {
        console.log(people[i].name + " is not old enough to see Mad Max Fury Road, don't let HIM in.");
    } else if (people[i].age = 18 && people[i].gender === "female") {
        console.log(people[i].name + " is not old enough to see Mad Max Fury Road, don't let HER in.");
    }
}

var array = [9, 3, 4, 2];
var buttonToggled = 0;
for (i = 0; i < array.length; i++) {
  buttonToggled += array[i];
}

if (buttonToggled % 2) {
  console.log("The button is turned on");
} else {
  console.log("The button is turned off");
}