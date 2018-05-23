const person = {
  firstName: "Bill",
  lastName: "Murry",
  email: "Bill@ga.co"
};

// const firstName = person.firstName;
// const lastName = person.lastName;
// const email = person.email;

const { firstName, lastName, email } = person;
console.log(firstName, lastName, email);

const explorer = {
  first: "Jacques",
  last: "Cousteau"
};

// Create two new variables, one called first and one called last

const { first, last } = explorer;
console.log(first, last);

//snow balled....

const details = ["kookslams", "kookslams@gmail.com", "1000000"];
const [userName, emailAddress, followers] = details;
// const userName = details[0];
// const emailAddress = details[1];
// const followers = details[2];

console.log(userName, emailAddress, followers);
