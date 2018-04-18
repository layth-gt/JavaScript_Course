//Create Promises

var myPromise = new Promise(function(resolve, reject) {
  resolve ("This task has finished running");
});

myPromise.then(function() {
  // console.log ("The promise was fulfilled");
});

function createPromise() {
  return new Promise(function (resolve, reject){
    resolve ("The promise was fullfilled");
  });
}

createPromise(). then (function(successMessage) {
  console.log (successMessage);
});

function delay(timeInMS){
  return new Promise (function(resolve, reject) {
    setTimeout(function () {
      resolve("I waited some amount of time for you")
    }, timeInMS);
  });
}

delay(1000).then (function(data){
  console.log(data);
});

delay(1000).then (function(data){
  console.log(data);
});

function makeAPIRequest () {
  return new Promise (function(resolve, reject){
    window.setTimeout(function() {
      resolve("We got the data back for you");
      //Handle an error - Say "Something went wrong"
      reject("Something went wrong");
    }, Math.random()*3000);
  });
}

makeAPIRequest().then (function(message) {
  console.log (message);
});

function giveEmployeePhone () {
  return new Promise (function(resolve,reject) {
    var generous = false;
    if (generous === true) {
      resolve("Here is your phone");
    } else {
      reject("Sorry, we didn't get you a phone")
    }
  });
}

giveEmployeePhone().then(function(message){
  console.log(message);
})
.catch(function(errorMessage) {
  console.log(errorMessage);
});