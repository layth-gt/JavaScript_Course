//Recieving Functions as Input (Callback style)

// function thisRunsRegulary() {
//   console.log ("This happens every 1000ms");
// }

// // setInterval (thisRunsRegulary,1000);

// setTimeout(function() {
//   console.log ("I was delayed by 2000ms");
// }, 2000);

//repeat
  //create a function that recieves a callback
  //And runs it X amount of times

function repeat(numTimes, cb) {
  
  for (var i = 1; i<= numTimes; i +=1) {
    cb(i);
    
  }
  
}

function myCallback (i) {
  console.log ("My callback was excuted", i);
}

// repeat(5, myCallback);

// repeat (10, function(enemyCount) {
//   console.log ("A new enemy was created", enemyCount);
// });


//forEach function that recieves an array and a callback
  //That callback should be provided with:
  //item
  //index
  //entireCollection

function forEach(coll, iterator) {
  for (var i = 0; i < coll.lenght; i+=1) {
    var item = coll[i];
    iterator(item, i, coll);
  }
  

}

var letters = ["a", "b", "c" ,"d", "e"];

function printLetter (currentItem, currentIndex, collection) {
  console.log(currentItem, currentIndex, collection);
}

forEach (letters, printLetter);

forEach (["dsfds", "sdfsd","yay"], function(brothersName){
  console.log (`The current brother is ${brothersName}`)
});