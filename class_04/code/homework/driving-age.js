// Driving Age
// Write a function that receives a userAge called canDrive
// If the received age is less than 16, print "Sorry, you can't drive yet"
// If the received age is equal to or over 16, print "Drive away!"
// Bonus: If the user can't drive yet, tell them how many years they will have to wait. E.g. "Sorry, you have 4 years to wait until you can drive"
// Bonus: Make a check to see if the user has their "L"s. E.g. If the user is over 16 and they have their "L"s

function canDrive (userAge,hasL) {
    if (userAge < 16) {
        var yearsToDrive = 16 - userAge;
        console.log ("Sorry, you have " + yearsToDrive + " years to wait until you can drive");
    } else if (userAge  > 15 && hasL) {
        console.log ("Drive away!");
    } else {
        console.log ("Sorry, you need a L license to be able to drive");
    };
}

canDrive(16,true);