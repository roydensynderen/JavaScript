function toLower(str) {
    console.log(str.toLowerCase());
}
toLower("HELLO THERE");

function toUpper(str) {
    console.log(str.toUpperCase());
}
toUpper("hey there");

function halfWord(str) {
    console.log(str.slice(0, str.length/2));
}
halfWord("PALINDROME");

function mergeWords(str) {
    console.log(str.concat(" there"));
}
mergeWords("hey");

function splitWord(str) {
    console.log(str.split(" "));
}
splitWord("hey there");

function countLetters(str) {
    console.log(str.indexOf("end"));
}
countLetters("friend");

function isolate(str) {
    console.log(str.substr(3, 5));
}
isolate("friend");

function lastPosition(str) {
    console.log(str.lastIndexOf("e"));
}
lastPosition("heythere");

function matchWord(str) {
    console.log(str.match("going"));
}
matchWord("hey there how is it going");

function replaceWord(str) {
    console.log(str.replace("there", "you"));
}
replaceWord("hey there how is it going");