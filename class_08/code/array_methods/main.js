var letters = ["a", "b", "c", "d", "e"];

letters.forEach(function(letter, index, entireArray){
    var message = `
    Current Letter: ${letter}.
    Index: ${index}.
    Entire Array: ${entireArray}.
    `;
    console.log(message);

});


var numbers = [123, 1423, 234, 45, 0.9];
function displayNum (currentNum, i) {
    var html = `<p> Item at index ${i} is ${currentNum}</p>`;
    document.body.innerHTML +=html;
}

numbers.forEach(displayNum);

//Filter

var nums = [1,2,3,4,5,6];

var odds = nums.filter(function(num){
    return num % 2 === 1;
});

console.log (odds);

console.clear();

var marxBrothers = [
    {
        name: "Groucho", admin: true
    },
    {
        name: "Harpo", admin: false
    },
    {
        name: "Gummo", admin: false
    }
];

var admins = marxBrothers.filter (function(brother){
    return brother.admin === true;
    
})

console.log(admins);


var words = ["banana", "MANGO", "Grapes", "Custard Apple", "CHICKEN"];

function isWordUpperCase (word) {
    return word === word.toUpperCase();
}

var allUpperCasedWords = words.filter(isWordUpperCase);

console.log (allUpperCasedWords);

console.clear();


//Map - Transforming every element in a collection into something else

var letters = ["a","b","c","d","e"];

var upperCasedLetters = letters.map(function(letter){
    return letter.toUpperCase();
});

console.log(upperCasedLetters);

var nums = ["1","2","3","4","5"];

var numsByFive = nums.map(function(number) {
    return number * 5;

});

console.log (numsByFive);
console.clear();


var todos = [
    "Watch Satantango",
    "Go to a plant sale",
    "Stay silent",
    "Buy chicken"
];

todos.map(function(todo, index) {
    return `<p>#${index + 1}: ${todo}</p>`;
}).forEach(function(markup){
    document.body.innerHTML += markup;
})

// console.log(htmlTodos);

console.clear();

//.reduce - Take a collection of data and reduce it to just one value
//The other name is inject - injecting an operation between items in the collection


var myNumbers = [1,2,3,4,5,6];

var sum = myNumbers.reduce(function(runningTotal, currentNum){
    var message = `
    Running Total: ${runningTotal}.
    Current Number: ${currentNum}`
    return runningTotal + currentNum;
}, 0);

console.log(sum);
console.clear();


var testScores = [88, 92, 48, 89, 100];

var totalScore = testScores.reduce(function(currentTotal, score){
    return currentTotal + score;
}, 0);

console.log (totalScore);