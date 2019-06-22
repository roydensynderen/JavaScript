function sum(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw "inputs must be numbers";
    //throw new TypeError("Inputs must be numbers");
  }
  return x + y;
}
try {
  sum("1", "2");
} catch (err) {
  console.log(err);
  //console.log(err.message);
}
console.log(sum(5, 8));

var user = { username: "shinsan", password: "mend0kusa1" };
function login(username, password) {
  if (username !== user.username || password !== user.password) {
    throw "Wrong username or password. Please try again.";
  } else {
    return "Login successful!";
  }
}
try {
  login("shitsan", "mend0kusa1");
} catch (err) {
  console.log(err);
}
console.log(login("shinsan", "mend0kusa1"));
