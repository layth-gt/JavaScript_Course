function translate(words) {
var baseURL = "https://translate.yandex.net/api/v1.5/tr.json/translate";
var API_KEY = "trnsl.1.1.20180423T104401Z.9f5b6f076e8ad59a.69d7f3414a35d69044563fb6a9575a9fd03c16f2";
var params = `?key=${API_KEY}&text=hello&lang=fr`;
var url = baseURL + params;
return fetch(url);
}

translate("Hello");