const genMultTable = () => {
    //start with empty array
    //push first 5 nums into an array with loop
    const output = [];
    for (let i = 1; i < 6; i++) {
        const row = [];
        for (let j = 1; j < 6; j++ ) {
            row.push(j * i);
        }
        output.push(row);
    }
    return output;
}
genMultTable()

module.exports = genMultTable;