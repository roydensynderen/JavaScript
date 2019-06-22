function createPassword(integer) {
    var password = [];
    var characters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()"

    for (i = 0; i < integer; i++) {
        password.push(characters[Math.floor(Math.random() * (characters.length))]);
    }
    return password.join('');
}

createPassword(9);


