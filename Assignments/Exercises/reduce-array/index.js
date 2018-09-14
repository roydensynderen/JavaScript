// function total(arr) {
//   return arr.reduce(function(accumulator, element) {
//     return accumulator - element;
//   });
// }

// console.log(total([1, 2, 3])); //6

// function reduce(arr, cb, intitialValue) {
//   for (var i = 0; i < arr.length; i++) {
//     initialValue = cb(initialValue, arr[i]);
//   }
//   return initialValue;
// }

// function voterResults(arr) {
//     return arr.reduce(function(accumulator, voter) {
//check age of voter
//add one to the age group it belongs in on the accumulator
//Return newly updated accumulator
//     }, {
//         "18-25": 0,
//         "26-35" 0,
//         "36-55": 0
//     })
// }

//Turn an array into the total of all numbers
function total(arr) {
  return arr.reduce(function (accumulator, event) {
    return accumulator + event;
  });
}
console.log(total([1, 2, 3]));

//Turn an array into a long string of all numbers
function stringConcat(arr) {

}
console.log(stringConcat([1, 2, 3]));

//6
const countVotes = data => {
  const accumulator {
    youngVotes: 0,
    youth: 0,
    midVotes: 0,
    mids: 0,
    oldVotes: 0,
    olds: 0
  }
  return data.reduce((accumulator, voter) => {
    if (voter.age > 17 && voter.age < 26) {
      accumulator.youth++;
      if (voter.voted) accumulator.youngVotes++;
    }
    //continue same logic for other age groups

    return accumulator;
  }, accumulator)
}