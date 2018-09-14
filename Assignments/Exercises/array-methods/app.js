var str = "hey my name is albert";
function nameChange(str, name) {
    var newArr = str.split(" ");
    newArr.splice(4, 1, name);
    return newArr.join(" ");
}
console.log(nameChange(str, "dani"));