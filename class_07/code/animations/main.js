var bill = document.querySelector ("img");

bill.style.position = "fixed";
bill.style.top = "0px";
bill.style.right = "0px";

//Creating a function to animate bill
//Firstly, access the current top property
//Add ten to current top property and set it to newTop
//Update Bill's top style to newTop
//Then call the function again after 15ms

function animateBill () {
    var topStr = getComputedStyle(bill).top;
    var height = getComputedStyle(bill).height;

    var currentTop = parseInt(topStr, 10);
    var currentHeight = parseInt(height,10);
    var newTop = currentTop +10;
    bill.style.top = newTop + "px";
    
    if (newTop + currentHeight < window.innerHeight) {
        window.setTimeout(animateBill,20);
    }
    
}

bill.addEventListener("click", animateBill);