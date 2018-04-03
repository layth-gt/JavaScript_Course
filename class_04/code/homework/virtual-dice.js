// Create a Roll Virtual Dice Function
// Optional: Receive a parameter to decide how many sides the Dice actually has (e.g. a 12-side dice)

function virtualDice (diceSides) {
    var randomNumber = Math.floor (Math.random() * diceSides) + 1;
    return randomNumber;
}

console.log (virtualDice (50));


