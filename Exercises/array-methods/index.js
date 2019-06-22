var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];  

// console.log("fruit: ", fruit);  
// console.log("vegetables: ", vegetables);  

// Remove last item on vegetable array
vegetables.pop();
console.log("vegetables: ", vegetables); 

// Remove first item from fruit array
fruit.shift();
console.log("fruit: ", fruit); 

//index of Orange
console.log(fruit.indexOf("orange"));

//Add that number to fruit array
fruit.push(fruit.indexOf("orange"));
console.log("fruits: ", fruit);

//Find length of vegetable array
var len = vegetables.length;
console.log(len);

//Add that no. to vegetable array
vegetables.push(len);
console.log(vegetables);

//Put 2 arrays together in new array "food"
var food = fruit.concat(vegetables);
console.log(food);

//Remove 2 elements from your new array start at index 4
console.log(food.splice(4, 2));
console.log(food);

//Reverse array
console.log(food.reverse());

