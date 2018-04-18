var startBtn = document.querySelector("button");
startBtn.addEventListener("click", btnCheck);
var timer = document.querySelector ("#timer");

var counter = 0;

var btnPressed= true;

function btnCheck () {
    
    
        startBtn.innerText = "Stop";
        btnPressed = false;
        startCounter();
    if (btnPressed === false && counter > 0){
        counter = 0;
        startBtn.innerText = "Start!";
        // btnPressed = false;
        return;
        
    };
    
}


function startCounter() {
    counter += 1;
    timer.innerText = counter;
    console.log (counter);
 
    if (counter > 0) {

        window.setTimeout(startCounter,100);

    }
}

//function to start a counter
// function startCounter () {
//     if (btnPressed === false) {
//         return
//     } else { 
//     counter += 1;
//     timer.innerText = counter;
//     console.log (counter);
//     window.setInterval(startCounter,100);
        
//     };
// }

// window.setInterval(counter,1000);

