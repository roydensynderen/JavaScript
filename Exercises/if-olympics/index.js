if (5 > 3) {
    console.log("is greater than");
}

var word = "cat";
if (word.length === 3) {
    console.log("is the length");
}

var word = "cat";
if (word === "dog") {
    console.log("they are the same");
} else {
    console.log("they are not the same");
}

var person = {
    name: "Bobby",
    age: 12
}

//BRONZE MEDAL
if (person.name.charAt(0) == "B") {
    console.log(person.name + " is allowed to go to the movie.");
}
var person = {
    name: "Bobby",
    age: 12
};

if (person.age > 18 && (person.name.charAt(0)) == "B") {
    console.log(person.name + " is allowed to go to the movie.");
}

//SILVER MEDAL
if (1 === "1") {
    console.log("loose")
} else if (1 == "1") {
    console.log("abstract")
} else {
    console.log("not equal at all")
}

if ((3 * 4) > 10 || (5 + 10) > 10) {
    console.log("It is true.")
} else {
    console.log("False.")
}

//GOLD MEDAL
var word = "dog";
if (typeof word === 'string' || word instanceof String) {
    console.log("It is a string!");
}

var word2 = "true";
    if (typeof (word2) === "boolean") {
        console.log("It is a boolean");
}

if ("s" < 12) {
    console.log(true);
} else {
    console.log(false);
}

var myNum = 10;
if (10 % 2) {
    console.log("odd");
} else {
    console.log("even");
}

var word = "dog";
var word2 = "true";

if (typeof word !== 'undefined') {
    console.log("Variable is defined.");
}

if (typeof word2 !== 'undefined') {
    console.log("Variable is defined.");
}





