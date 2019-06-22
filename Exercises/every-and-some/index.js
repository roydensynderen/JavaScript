const testCase1 = [1, 2, '3'];
const testCase2 = [1, 2, 3];

function every(arr) {
    var x = typeof arr[0]
    for (let i = 1; i < arr.length; i++) {
       if (x !== typeof arr[i]) {
           return false;
       }
    }
    return true;
}

every(testCase1) //false
every(testCase2) //true

// Answer:
const every = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i])) {
            return false
        }
    }
    return true;
}

every(arr, (item) => {
    return typeof item === 'number' 
})


const some = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i])) {
            return true
        }
    }
    return false;
}

some(arr, (item) => {
    return typeof item === 'number'
})

Array.prototype.every = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i])) {
            return false
        }
    }
    return true
}

testCase1.every(num => typeof num === 'number')