
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
// Bonus: Get the current year using JavaScript!

var currentAge = 35;
var maximumAge = 90;
var snackPerDay = 2;
var totalSnack = (maximumAge - currentAge) * (365 * 2);
console.log ("You will need " + totalSnack + " to last you until the ripe old age of " + maximumAge);