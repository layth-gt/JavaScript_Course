//Blueprint
class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    console.log(`A person was born`, this);
  }
  sayHiTo(name) {
    console.log(`Hello! ${name}, I am ${this.name}`);
  }
}

//Instance
// Instantiating -> It calls the constructor!
const bill = new Person("Bill", "bill@ga.co");
const jane = new Person("Jane", "jane@ga.co");

bill.sayHiTo("Dazza");
jane.sayHiTo("Serge");

//Book
//author
//title
//constructor
// read() -> You are currently read TITLE by AUTHOR

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    console.log("A new book was printed");
  }
  read() {
    console.log(`You are currently reading ${this.title} by ${this.author}`);
  }
}

const geb = new Book("yay", "ohh");
geb.read();

console.clear();

class User {
  constructor(name, username) {
    this.name = name;
    this.username = username;
    console.log("A user logged in", this);
  }
  readPost() {
    console.log(`${this.username} is reading a post`);
  }
  commentOnPost() {
    console.log(`${this.username} just commented`);
  }
}

const userOne = new User("Bill", "billyboy");

class Admin extends User {
  constructor(name, username) {
    super(name, username); //This calls User constructor
    this.admin = true;
    console.log("An admin logged in", this);
  }
  deletePost() {
    console.log(`${this.username} deleted a post`);
  }
}
console.clear();
const admin = new Admin("Mikky", "mikky@ga.co"); //This calls Admin constructor
