var rs = require("readline-sync");
// var willWin = false;
// while(!willWin){
//     willWin = rs.keyInYN("Do you wanna win?");
// }
// console.log("Duh");

var play = false;
while(!play){
    play = rs.keyInYN("Let's play a game!");
}
console.log("Well played!")

var firstChoices = ["Hand in dark hole", "Find key", "Open door"];
var firstChoice = rs.keyInSelect(firstChoices, "What will you do first?");
if (firstChoices[0]) {
    console.log("You hand was chopped off.");
} else if (firstChoices[1]) {
    console.log("You found the key under the carpet.");
    
} else if (firstChoices[2]) {
    console.log("You cannot open the door unless you have the key.");
}
