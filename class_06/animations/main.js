var bill = document.querySelector("img");

function fadeBillAway () {
    var currentOpacity = getComputedStyle(bill).opacity;
    currentOpacity = parseFloat (currentOpacity, 10);
    var newOpacity = currentOpacity - 0.05;
    bill.style.opacity = newOpacity;
    
    if (newOpacity >= 0) {
    window.setTimeout(fadeBillAway,100);
    }
    // console.log ("Bill was faded");
}

fadeBillAway();


var nick = document.querySelector(".nick");
nick.style.width = "100px";

function makeNickWider () {
    var widthAsString = getComputedStyle(nick).width;
    var currentWidth = parseInt(widthAsString, 10);
    var desiredWidth = currentWidth + 10;
    nick.style.width = desiredWidth + "px";
    console.log (widthAsString, currentWidth,desiredWidth);
    if (desiredWidth <= 500) {
    window.setTimeout(makeNickWider, 1000/60);
    } else {
        console.log ("Animation complete!");
    }
}

makeNickWider();

//Get teh current width
//Add 10 to it 
//Update nick's width
// Keep doing this every 50s