// The Age Calculator
// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:

// Takes 2 arguments: birth year, current year.
// Calculates the 2 possible ages based on those years.
// Outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

function calculateAge (birthYear, currentYear) {
    var age = currentYear - birthYear;
    console.log ("You are either " + age + " or " + (age - 1));
}

calculateAge(1983, 2018);
calculateAge(1989, 2018);
calculateAge(2013, 2018);