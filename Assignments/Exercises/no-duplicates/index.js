function noDupes(str) {
    var output = {
        noDupes: "",
        extras: ""
    }
    for (i = 0; i < str.length; i++) {
        if (output.noDupes.includes(str[i])) {
            output.extras += str[i];
        } else {
            output.noDupes += str[i];
        }
    }
    return output;
}

console.log(noDupes("benjammmin"));