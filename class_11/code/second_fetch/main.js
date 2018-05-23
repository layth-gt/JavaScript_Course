//Working with APIs
//Figure out:
//  The Base URL
//  Path
//  HTTP Method
//  Data Type
//  Parameters

var baseURL = "http://ron-swanson-quotes.herokuapp.com/";
var path = "v2/quotes";
var url = baseURL + path;

console.log(url);

function getRonQuote() {
    fetch(url).then(function(response){
        
        return response.json();
    })
    .then (function(data){
        var quote = data[0];
        var pTag = document.createElement("p");
        pTag.innerText = quote;
        var targetDiv = document.querySelector("#output");
        targetDiv.appendChild(pTag);
        setTimeout(getRonQuote, 2000);
    });
}

getRonQuote();