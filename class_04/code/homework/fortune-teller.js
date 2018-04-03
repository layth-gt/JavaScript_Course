// The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:

// Takes 4 arguments: number of children, partner's name, geographic location, job title.
// Outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function tellFortune (numOfChildren, partnerName, geoLocation, jobTitle) {
    console.log ("You will be " + jobTitle + " in " + geoLocation + ", and married to " + partnerName + " with " + numOfChildren + " kids.");
}

tellFortune (4, "Sam", "Brisbane", "Manager");
tellFortune (2, "Noosa", "Sydney", "Designer");
tellFortune (32, "Ali", "Basrah", "Driver");