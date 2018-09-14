const multiD1 = [[1,2,3],["a","b","c"],[true, true, true]];

const multiD2 = [[true,false,true],[false,false,true]];

function checkTypes(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (typeof arr[i][j] == typeof arr[i+1][j]) {
                return true;
            } else {
                return false;
            }
        }
    }
}

checkTypes(multiD2);

const checkTypes = arr => {
    const dataType = typeof arr[0][0];
    return arr.every(subArr => subArr.every(element => typeof element === dataType));
}