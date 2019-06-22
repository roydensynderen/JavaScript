//Addition function
function addNo(x, y) {
    return x + y;
}
addNo(5, 8);

//MAX
function getMax(a, b, c) {
    return Math.max(a, b, c);
}
getMax(1, 2, 3);

//Even or Odd
function randomNo(x) {
    if (x % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
randomNo(5);

//20+ or less
function randomStr(x) {
    if (x.length >= 20) {
        return x + x;
    } else {
        return x.slice(0, x.length/2); 
    }
}
randomStr('twentyfivetwentyfive');



