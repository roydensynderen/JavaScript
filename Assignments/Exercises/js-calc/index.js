var rs = require("readline-sync");

function add(num1, num2) {
    return num1 + num2;
}

function mul(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1/num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

var num1 = rs.question("Please enter your first number\n");
var num2 = rs.question("Please enter your second number\n");
var choices = ['add', 'sub', 'mul', 'div'];
var savedChoice = rs.keyInSelect(choices, "Please select one.");
var index = choices[savedChoice];

if (index === choices[0]) {
    console.log(`The result is ${add(Number(num1), Number(num2))} !`);
} else if (index === choices[1]) {
    console.log(`The result is ${sub(Number(num1), Number(num2))} !`);
} else if (index === choices[2]) {
    console.log(`The result is ${mul(Number(num1), Number(num2))} !`);
} else if (index === choices[3]) {
    console.log(`The result is ${div(Number(num1), Number(num2))} !`);
}




