//PRELIMINARIES
for (i = 0; i < 10; i++) {
    console.log(i);
}

for (i = 9; i > -1; i--) {
    console.log(i);
}

var fruits = ["banana", "apples", "orange", "kiwi"];
for (i = 0; i < fruits.length; i++) {
    console.log (fruits[i]);
}

//BRONZE MEDAL
var array = [];
for (i = 0; i < 10; i++) {
    array.push(i);
}
console.log(array);

var array = [];
for (i = 0; i <= 100; i++) {
    array.push(i);
}
console.log(array);

var fruits = ["banana", "orange", "apple", "kiwi"];
var otherFruits = ["pear", "peach"];

for (i = 0; i < otherFruits.length; i++) {
    fruits.push(otherFruits[i]);
}
console.log(fruits);

//SILVER MEDAL
var names = ["Royden", "Nate", "Maxx", "Declan", "Anthony"];
for (i = 0; i < names.length; i++) {
    console.log (names[i]);
}

var peopleArray = [];
for (i = 0; i < 5; i++) {
    peopleArray[i] = {
        name: "name",
        occupation: "occupation"
    };
}
console.log(peopleArray);

var names = ["Harrison Ford", "Justin Bieber", "Vladimir Putin", "Oprah"];
var occupations = ["Actor", "Singer", "Politician", "Entertainer"];
var peopleArray = [];

for (i = 0; i < names.length; i++) {
    peopleArray[i] = {
        name: names[i],
        occupation: occupations[i]
    };
}
console.log(peopleArray);

// GOLD MEDAL
var firstArray = [];
for (i = 0; i < 3; i++) {
    firstArray.push([0,0,0]);
}
console.log(firstArray);

var firstArray = [];
for (i = 0; i < 3; i++) {
    firstArray.push([i, i, i]);
}
console.log(firstArray);

var firstArray = [];
for (i = 0; i < 3; i++) {
    firstArray.push([0, 1, 2]);
}
console.log(firstArray);

var firstArray = [];
for (i = 0; i < 3; i++) {
    var j = 'x';
    firstArray.push([j, j, j]);
}
console.log(firstArray);


