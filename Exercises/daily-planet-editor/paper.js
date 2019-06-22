/*
This code contains only syntax and code style problems. The logic of the code works,
so DO NOT change the functionality of anything in here.

In short, you shouldn't need to add your own statements anywhere,
just fix the existing ones.
*/


// Written by Kent, Clark

var enemies = ["Lex", "Batman", "Darkseid", "Brainiac", "General Zod", "Doomsday"];

function whoWins(isThereKryptonite, enemyName) {
    if (!isThereKryptonite) {
        return "Superman beats " + enemyName + " , of course";
    } else {
        return "Depends on how quick Superman can get rid of the Kryptonite." + " " + enemyName + " could possibly win this one.";
    }
}

whoWins(1, "Lex");


var enemies = ["Lex", "Batman", "Darkseid"];

function whoWins() {
    for (var i = 0; i < enemies.length; i++) {
        var isThereKryptonite = 0;
        if (i % 2 === 0) {
            isThereKryptonite = true;
        } else {
            isThereKryptonite = false;
        }
        console.log (isThereKryptonite, enemies[i]);
    }    
}
whoWins(0, "Lex");


function howAttractedIsLoisLaneToMe() {
    // 1 is not at all attracted, 10 is "super" attracted...
    return Math.floor((Math.random() * 10) + 1);
}
howAttractedIsLoisLaneToMe();


var clarkKent = true;
var superman = false;

while (clarkKent) {
    var phoneBoothQuickChange = Math.random();
    if (phoneBoothQuickChange >= 0.5) {
        console.log("Now I'm Superman!");
        break;
    } else {
        console.log("I'm just a nerdy columnist");
        break;
    }
}
