const database = [  
    {firstName: "Jack", lastName: "Smith", age: 2},
    {firstName: "Jill", lastName: "Johnson", age: 20},
    {firstName: "Jill", lastName: "Smith", age: 100},
    {firstName: "Jack", lastName: "White", age: 2}
];

// filterDatabase({}, database);  
//     //returns entire database array

// filterDatabase({dolphin: "squeak!"}, database);  
//     //returns empty array

// filterDatabase({firstName: "Jack", age: 2}, database);  
//     //returns 
// [
//     {firstName: "Jack", lastName: "Smith", age: 2},
//     {firstName: "Jack", lastName: "White", age: 2}
// ]

const filterDatabase = (query, database) => {
    //loop thru database
    return database.filter(item => {
        //check if match query
        for (key in query) {
            if(item[key] != query[key]) return false;
        }
        return true;
    })
}

console.log(filterDatabase({}, database));