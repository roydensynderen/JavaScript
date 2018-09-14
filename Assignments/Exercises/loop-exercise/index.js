function separateWords(word) {
    var separated = '';
    for (let i = 0; i <= word.length; i++) {
        console.log(word.charAt(i));
    }
}

separateWords("damnson");


function find(input, letter) {
    let found = false;
    for (let i = 0; i < input.length; i++) {
        if (input.charAt(i) === letter) {
            console.log("Letter positioned at " + i + "!");
            found = true;
            return;
        }  
    }
    if (found == false) {
        return ("Error, character not found!");
    }
};

find('damnson', 'g');


function findFortyTwo(arr) {
    let numberFortyTwo = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 42) {
            console.log("42 found!");
            numberFortyTwo = true;
            return;
        } 
    }

    if (!numberFortyTwo) {
        console.log("42 not found!");
    }
}

findFortyTwo([1, 32, 68, 93, 42]);

var arr = [1, 32, 21, 55, 72, 12, 41, 60, 46, 23];
var min = function(arr) {
    var newMin = 100;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] <= newMin) {
            newMin = arr[i]
        }
        return newMin;
    }
}
min(arr);




