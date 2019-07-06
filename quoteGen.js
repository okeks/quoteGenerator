var arrayOfQuotes = [
  {
    author: "Jim Rohn",
    quote: "Beware of what you become in pursuit of what you want."
  },
  {
    author: "Epictetus",
    quote: "Its not what happens to you, but how you react to it that matters."
  },
  { author: "Frank Sinatra", quote: "The best revenge is massive success" },
  {
    author: "Bishop David Oyedepo",
    quote: "you are responsible for the outcome of your life"
  }
];
function randomSelector(array) {
  return Math.floor(Math.random() * array.length);
}

function generateQuote() {
  var randomNumber = randomSelector(arrayOfQuotes);
  document.getElementById("quoteOutput").innerHTML =
    '"' + arrayOfQuotes[randomNumber]["quote"] + '"';
  document.getElementById("authorOutput").innerHTML =
    "-" + arrayOfQuotes[randomNumber]["author"];
}
