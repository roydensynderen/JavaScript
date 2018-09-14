const balanceParenthesis = str => {
    let leftCount = 0;
    let rightCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (rightCount > leftCount) {
            return false;
        } else if (str[i] === "(") {
            leftCount++;
        } else if (str[i] === ")") {
            rightCount++;
        }
    }
    return leftCount === rightCount;
}

module.exports = balanceParenthesis;