// Store language
// If language is HTML or CSS
    //You are talking about a front end language
//Otherwise
    //It could be a back end language

var language = "HTML";
if ( language === "HTML" || language === "CSS") {
    console.log ("You are talking about the front end");
} else {
    console.log ("It could be a back end language");
}

var userNameExisit = true;
var appropriatePassword = true;
if (userNameExisit === true && appropriatePassword === true) {
    console.log ("You are logged in");
} else {
    console.log ("Something went wrong");
}

// Store hasUserAccount
// if the user desn't have a user account
    //you can create an account
//otherwise
//You already have an account
var hasUserAccount = true;
if (!hasUserAccount === true) {
    console.log ("You can create an account");
} else {
    console.log ("You already have an account");
}