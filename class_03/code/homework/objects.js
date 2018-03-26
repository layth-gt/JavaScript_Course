// The Reading List
// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
var myBooks = [
    {
    title: "Day in the Life of Marlon Bundo",
    author: "Jill Twiss",
    alreadyRead: true
},
{
    title: "Secret Empires",
    author: "Peter Schweizer",
    alreadyRead: false
},
{
    title: "A Wrinkle in Time",
    author: "Madeleine L'Engle",
    alreadyRead: true
}]

for (var i = 0; i < myBooks.length; i++) {
    if (myBooks[i].alreadyRead === true) {
        console.log ("You already read " + myBooks[i].title + " By " + myBooks[i].author);
    } else {
        console.log ("You still need to read " + myBooks[i].title + " By " + myBooks[i].author);
    }
}


// The Recipe Card
// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).

// On separate lines (one console.log statement for each), log the recipe information so it looks like:

// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa
var myFavRecipe = {
    title: "Mole",
    serves: 2,
    ingredients:["cinnamon","cumin","cocoa"]
};

console.log (myFavRecipe.title);
console.log (myFavRecipe.serves);
for (var j = 0; j < myFavRecipe.ingredients.length; j++) {
    console.log (myFavRecipe.ingredients[j]);
}

// The Movie Database
// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
// Maybe the join method will be helpful here


var myFavMovies = {
    title: "Terminator 2",
    duration: 2.36,
    stars: ["Arnold Schwarzenegger", "Linda Hamilton", "Edward Furlong", "Robert Patrick"]
};

console.log (myFavMovies.title + "lasts for " + myFavMovies.duration + " minutes. Stars: " + myFavMovies.stars.join(', '));
