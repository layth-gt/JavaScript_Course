//Working with APIs
//Figure out:
//  The Base URL
//  Path
//  HTTP Method
//  Data Type
//  Parameters

var baseURL = "https://api.icndb.com";
var path = "/jokes/random";
var params = "?limitTo=[nerdy]";
var url = baseURL + path + params;

console.log(url);

function getChuckQuote() {
    fetch(url).then(function(response){
        
        return response.json();
    })
    .then (function(data){
        var joke = data.value.joke;
        var html = `<p>${joke}</p>`;
        var target = document.querySelector("#output");
        target.innerHTML += html;
        setTimeout(getChuckQuote, 2000);
        
        });
}

getChuckQuote();