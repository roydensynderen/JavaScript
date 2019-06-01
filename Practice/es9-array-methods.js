// ES9

// Array.flat
let nestedValues = [1, [2,3, [[]]], [4, [5]], 6]
nestedValues.flat(/*default: 1*/) // [1,2,3,[],4,[5], 6]
nestedValues.flat(2) //[1,2,3,4,5,6]

//Array.flatmap - flat 1 level as you map
nestedValues.flatMap(function doubleEvens(v) {
    if (v % 2 === 0) {
        return [v, v * 2]
    } else {
        return []
    }
}) //[ 2, 4, 4, 8, 6, 12]