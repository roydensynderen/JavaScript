const gameOfThrees = (n, counter = 0) => {
    if (n === 1) return counter;

    if (n % 3 === 0) {
        return gameOfThrees (n / 3, counter + 1);
    } else {
        if ((n + 1) % 3 === 0) {
            return gameOfThrees((n + 1) / 3, counter + 1);
        } else {
            return gameOfThrees((n - 1) / 3, counter + 1);
        }
    }
}

console.log(gameOfThrees(7));