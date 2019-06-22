var rs = require('readline-sync');

var firstName = rs.question('May I have your first name? \n');
console.log("Hello ".toUpperCase() + firstName + '!\n');

var lastName = rs.question('May I also have your last name?\n');
console.log('Thank you ' + firstName.concat(' ' + lastName + '!\n'));

var age = rs.question('What is your age? \n');
console.log('Okay, so you are ' + firstName + ' ' + lastName + " and you are " + age + " years old.\n")

var you = rs.question('Describe yourself in twenty letters or more\n');
console.log('Just to make sure, the last half of your input is ' + you.slice(15, 30) + '!\n');

var change = rs.question('You may choose to change the input returned to you. Please input numbers from 0-10\n');
console.log(userInput());

function userInput(start) {
    return you.slice(start, 15);
}

// var likesRavioli = rs.keyInYN("Do you like ravioli?");

// if (likesRavioli) {
//     console.log("cool story, bro");
// } else {
//     console.log("don't care either way");
// }

// var directions = ["north", "south", "east", "west"];
// var direction = rs.keyInSelect(directions, "Which way do you wana go?");

