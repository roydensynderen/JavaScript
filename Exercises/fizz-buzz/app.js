var arr = [];
function num() {
  for (i = 1; i < 101; i++) {
    arr.push([i]);
  }
  return arr;
}
num();

function fizzBuzz() {
  var output = [];
  for (var i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      output.push("FizzBuzz");
    } else if (i % 3 === 0) {
      output.push("Fizz");
    } else if (i % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(i);
    }
  }
  return output;
}

fizzBuzz();
