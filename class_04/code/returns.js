function square (x) {
    var result = x * x;
    return result;
    
}

var squarOfFour = square(4);
console.log (squarOfFour);

// var users = [
//     {username: "kookslams", "admin", admin: ture},
//     {username: "kookslams", "admin", admin: ture},
//     {username: "kookslams", "admin", admin: ture},
// ];



//snowballed here






function cube (num) {
    return Math.pow (num, 3);
}

function double (num) {
    return num * 2;
}
console.log (cube(3));
console.log (double(5));

var result = cube (double(5));
console.log (result);

function delayed () {
    console.log ("I was delayed");
}

setTimeout (delayed, 1000);

// var person = {
//     firstName
// }