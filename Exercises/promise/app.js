//Javascript promise
//Can be in 1 of 3 states: Fulfilled, Rejected, Pending
    //A pending promise may transition into a fulfilled or rejected state.
    //Once fulfilled/rejected, it canot change it's status.

const arr = new Promise(function(resolve, reject) {
    console.log(arr) // pending
}) 

function wait(time) {
    return new Promise(function(resolve, reject) {
        return setTimeout(resolve, time)
    })
}

wait(2000)
    .then(() => console.log("Dinner is ready"))
    .catch(err => {
        console.log('Request failed')
    })