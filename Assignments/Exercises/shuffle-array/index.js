const arrayShuffler = arr => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[Math.floor(Math.random() * Math.max(...arr))]
    }    
    return arr
}

arrayShuffler([1, 2, 3, 4, 5])

// ANSWER
const unsort = arr => {
    const output = [];
    while(arr.length) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        output.push(arr.splice(randomIndex, 1)[0])
    }
    return output;
}

unsort([1, 2, 3, 4, 5])

// ANSWER 2
const unsort = arr => {
    const output = Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        let randomIndex = Math.floor(Math.random() * arr.length);
        while(output[randomIndex] != undefined) {
            randomIndex = Math.floor(Math.random() * arr.length);
        }
        output[randomIndex] = arr[i]
    }
    return output;
}

unsort([1, 2, 3, 4, 5])

//ANSWER 3
const unsort = arr => {
    return arr.sort((a, b) => Math.floor(Math.random() * 3) - 1);
}
