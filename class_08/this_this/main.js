// // //Global Binding (Default) - window

// // console.log (this);

// // function sayHi () {
// //   console.log (this);
// // }

// // sayHi();

// // //Event Binding - whatever was interacted with

// // var bill = document.querySelector ("img");

// // function.onImageClick() {
// //   console.log(this);
// // }

// // bill.addEventListener("click", onImageClick);





// //Explicit binding - this refers to whatever you passed in

// function sayHello() {
//   var greeting = `${this.nam} says hi`;
//   console.log (greeting);
// }

// var groucho = {name: "Groucho"};
// var harpo = {name: "Harpo"};
// sayHello.call (groucho); //groucho === this
// sayHello.call (harpo); //harpo === this

//new Binding - A new empty object that is implicitly returned

function Person (name, username, email) {
  this.name = name;
  this.username = username;
  this.email = email;
  function sayHi 
  console.log (this);
}

var bill = new Person ("Bill", "billy", "bill@ga.co");


function Beer(name, size) {
  this.name = name;
  this.size = size;
  this.drink = function () {
    console.log ("Glug, glug,glug");
  }
}


var vb = new Beer ("vb", "370ml");