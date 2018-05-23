const outputDiv = document.querySelector("#output");
const recordButton = document.querySelector(".record");
console.log(outputDiv);

function displayData(data) {
  const [translation] = data.text; //array deconstraction here
  outputDiv.innerHTML = `<p>${translation}</p>`;

  const synth = window.speechSynthesis;
  const utterThis = new SpeechSynthesisUtterance(translation);
  utterThis.lang = "fr";
  synth.speak(utterThis);
}

function translate(words) {
  const BASE_URL = "https://translate.yandex.net/api/v1.5/tr.json/translate";
  const API_KEY =
    "trnsl.1.1.20180423T104401Z.9f5b6f076e8ad59a.69d7f3414a35d69044563fb6a9575a9fd03c16f2";
  const PARAMS = `?key=${API_KEY}&text=${words}&lang=en-fr`;
  const URL = BASE_URL + PARAMS;
  //Turn the callback into an arrow function
  return fetch(URL).then(res => res.json());
}

recordButton.addEventListener("click", function() {
  const recog = new webkitSpeechRecognition();
  recog.onresult = function(data) {
    const words = data.results[0][0].transcript;
    translate(words).then(displayData);
  };
  recog.start();
});
