function countChar(str) {
    var output = {};
    for (var i = 0; i < str.length; i++) {
        var character = str.charAt(i);
            if(output[character]){
                output[character]++;
            } else {
                output[character] = 1;
            }
    }
    return output;
}

console.log(countChar('slimy smelly solution'));

//Extra Credit
function countChar(str) {
    var output = {};
    var removedChars = "";
    for (var i = 0; i < str.length; i++) {
        var character = str.charAt(i);
            if(output[character]){
                output[character]++;
            } else {
                output[character] = 1;
                removedChars += character;
            }
    }
    const sortedArray = [];
    for (var key in output) {
        sortedArray.push({ [key]: output[key] })
    }

    return sortedArray.sort(function(obj1, obj2)) {
        var key1 = Object.keys(obj1)[0];
        var key2 = Object.keys(obj2)[0];
        return obj2[key2] - obj1[key1];
    })

    // return {
    //     output: output,
    //     removed: removedChars
    // };
}

console.log(countChar('slimy smelly solution'));