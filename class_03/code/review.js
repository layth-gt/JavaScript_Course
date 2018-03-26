// If the user's age is over 18
//     Log out go purchse something
// Otherwise
//     Go to mylittlpony.com

var userAge = 16;
var isHacker = true;
//we can use user (userAge >= 18 || isHacker) because isHacker is true anyways
if (userAge >= 18 || isHacker === true) {
    console.log ("You can view the site");
} else {
    console.log ("Visit mylittlepony.com");
}

//If the user's name is Blade AND his job is Teacher
    //Log out that is a good chooice 


var userName = "Blad";
var userJob = "teacher";

if (userName === "Blade" && userJob === "teacher") {
    console.log ("That's a good choice");
} else if (userName === "Blade" && userJob === "Landscape Gardener") {
    console.log ("that isn't a great choice for you");
} else {
    console.log ("We aren't sure");
}