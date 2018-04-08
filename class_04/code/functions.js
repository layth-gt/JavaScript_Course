//function declaration - HOISTED
function doSomething () {
    console.log("This function was called");
    
}

doSomething();


//function expression
var logSomething = function(){
    console.log ("The logSomething function was called");
};

logSomething();

//squares the number five

function squareFive () {
    // console.log (5 * 5); or below
    console.log (Math.pow(5,2)); //pow it's math power meaning 5 power of 2
}

squareFive();

//virtual dice

function virtualDice () {
    var num = Math.floor (Math.random() * 6) + 1; //we added plus one to get rid of zero results
    console.log (num);
};

virtualDice();

function seeArguments () {
    console.log(arguments);
}

// seeArguments(10, 25);

function greetPerson(name) {
    var message = "Hello " + name;
    console.log (message);
}

greetPerson("Layth");
greetPerson("Mona");

function addTogether (x,y) {
    console.log (x + y);
}
//addTogether();
//addTogether (4);
addTogether(4, 5);

//create a squareNumber function
//receive a piece of data to square
//create your own "math.pow" function
//receives a number and a power

function squareNumber (numOne) {
    console.log (numOne * numOne);
}

squareNumber(15);

function pow(base,exponent) {
    var result = Math.pow(base, exponent);
    console.log (result);
}

pow (12, 2);

function multiplyTogether (firstNum, secondNum){
    console.log (firstNum * secondNum);
}

multiplyTogether (2,2);

//creat a greet person
//recieve a starting message (e.g. Hello, Hi)
// recieve a name
// Log out those two things combined
//Hello, Jane
//Hi, Greg

function greetPerson (startingMessage, personName){
    var message = startingMessage + " " + personName;
    console.log (message);
}

greetPerson ("Hello", "Jane");
greetPerson ("Hi", "Greg");


function changeTheme (themeChoice) {
    if (themeChoice === "light") {
        console.log("Background white, text black");
    } else {
        console.log ("Background black, text white");
    }

}

changeTheme("light");
changeTheme("dark");

//showOrHideMenu
    //recieve a boolean called isOpen
    //if the menu is open
        //log out "close the menu"
    //otherwise
        //Log out "show the menu"

function showOrHideMenu(isOpen) {
    if (isOpen) {
        console.log ("close the menu");
    } else {
        console.log ("show the menu");
    }
}

showOrHideMenu(true);