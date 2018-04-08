//4 things for every event
// Select the target element
// Define the event type
// create the callback function
// create your event listener

var button = document.querySelector("button");

var eventType = "click";

function onButtonClick () {
    console.log("The button was clicked");
}

button.addEventListener(eventType, onButtonClick);

//every time the user moves their mouse on top of Bill
//Log out that mouse moved
// Add a border

var bill = document.querySelector("img");
var type = "contextmenu";

bill.addEventListener (type, function (){
    console.log ("Mouse was moved");
});

//everytime the browser is resized
//log out the current browser width

window.addEventListener("resize", function () {
    var message = "The browser's width is " + this.window.innerWidth;
    console.log(message);
});

// Create an image, set the src to nick cage, add it to the page
// Add an event listener and log nick was clicked

var nick = document.createElement ("img");
nick.setAttribute("src", "http://placecage.com/200/200");
document.body.appendChild(nick);

function nickWasClicked() {
    console.log ("Nick was clicked");
}

nick.addEventListener("click", nickWasClicked);


var createAccountButton = document.querySelector(".create");
var typeOfEvent = "click";
function createAccount () {
    var emailInput = document.querySelector("#email");
    var usernameInput = document.querySelector("#username");
    var username = usernameInput.value;
    var email = emailInput.value;
    var message = email + " " + username;
    console.log (message);
}

createAccountButton.addEventListener(typeOfEvent, createAccount);

var targetInput = document.querySelector(".type");

function onKeyPress(event) {
    var p = document.createElement("p");
    p.innerText = "You typed " + event.key;
    document.body.appendChild(p);
    
}

targetInput.addEventListener("keypress", onKeyPress);


window.addEventListener("mousemove", function (e) {
    var xCoord = e.clientX;
    var yCoord = e.clientY;
    var imageToMove = document.querySelector(".move");
    imageToMove.style.left = xCoord + "px";
    imageToMove.style.top = yCoord + "px";
    console.log (xCoord, yCoord);
});