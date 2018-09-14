// Const (Cannot re-assign with '=', but can modify arrays & objects)
// Var is a function scope, & let is a block scope.

// If no parameter:
const noParam = () => {};

// 1 parameter:
const oneParam = param => {};

// More than 1 parameter:
const manyParam = (a, b) => {};

// Return keyword:
const singleLine = (a, b) => a + b;

const singleObject = (a, b) => ({
  Key: "value",
  Foo: "bar"
});

const multLine = (a, b) => {
  const firstLine = "foo";
  const secLine = "bar";
  return firstLine + secLine;
};

//When building constructors, do not use arrow functions.
function Enemy(name, hp = 100) 
//setting default hp if not provided

//...args is a conventional way to do it. Spread (...arr) is a non-
// destructor operator.
let spreader = (...arr) => {
    console.log(arr);
}
spreader([1, 2, 3]);

const car = {
    model: "WRX",
    year: 2018
}
const extraFeatures = {
    tintedWindows: true;
}
const copy = {...car};
car.sold = true;
console.log(copy); // "WRX".

//destructuring
const model = car.model;
const year = car. year
// IN API VIEW
// const year= country.dealership.location[2].zip[4];

//way to do it (destructuring), get only "year" from car.
const { year } = car; 

const people = ["bob", "marcus", "nate"];
const [bob, marcus, nate] = people;

const data = {
    name: "dude",
    age: 30,
    gender: "male"
}

//template literals
console.log(`My name is ${data.name}.`);

//objects properties
const prog1 = () => {}
const prog2 = () => {}
const prog3 = () => {}
const prog5 = () => {}

module.exports = {
    prog1,
    prog2,
    prog3,
    prog4
}

//Same thing.
car = {
    // ignition: function() {
    //     console.log("vroom");
    // }
    ignition(){
        console.log("vroom");
    }
}

//No difference between class & constructor
//ES6 constructors = class
class Animal {
    constructor(name) {
        this.name = name;
        this.hasCellWall = false;
    }
    makeSound(sound) {
        console.log(`${this.species} goes ${sound}`);
    }
}

//Need to use extends and super to access property.
class Mammal extends Animal { //Animal here is the class that was extended
    constructor(name) {
        super(name); //Targets property in a given class
        this.hasFur = true;
    }
    dance() {
        console.log("lol");
    }
}

class Format {
    reverse(str){
        return str.split("").reverse().join();
    }
}
const formatter = new Format();