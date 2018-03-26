//Creating Objects
var emptyObj = {};

var user = {
    firstName: "Bill",
    lastName: "Murray",
    email: "bill@ga.co",
    blogPosts:[]
};

//console.log (user);

//Accessing Values

var firstName = user.firstName;
console.log(firstName);

var email = user.email;
console.log (email);

var movie = {
    title: "Satantango",
    director: "Bela Tarr",
    duration: 432
};
console.log (movie.title, movie["title"]);

//Reassigning = 534;
movie.duration = 834;
console.log (movie);