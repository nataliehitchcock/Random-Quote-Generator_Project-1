/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

// Created an array of quote objects
var quotes = [{
  quote: 'Without music, life would be a mistake',
  source: 'Friedrich Nietzsche',
  citation: 'Brainpickings: Nietzsche on the Power of Music',
},

{
  quote: 'Music should be an essential part of every analysis.',
  source: 'Carl Jung',
  citation: 'https://www.udiscovermusic.com/stories/15-inspirational-quotes-power-music/',
  year: '1875-1961'
},

{
  quote: 'Where words fail, music speaks.',
  source: 'Hans Christian Andersen',
  citation: 'https://www.cmuse.org/100-famous-and-inspirational-music-quotes/',
},

{
  quote: 'Music touches us emotionally, where words alone can’t',
  source: 'Johnny Depp',
  citation: 'https://www.cmuse.org/100-famous-and-inspirational-music-quotes/',
},

{
  quote: 'Music is by far the most wonderful method we have to remind us each day of the power of personal accomplishment.',
  source: 'Chris S. Salazar,',
  citation: 'https://www.wow4u.com/musicquotes/',
}
];
// Created a random quote number generator that pulls from the quotes array
function getRandomQuote(array) {
var quoteIndex = Math.floor(Math.random() * (quotes.length));{
var randomQuote = quotes[quoteIndex];
}
}
// Created a function to print the quotes
function printQuote() {
var message = "";    
var result = getRandomQuote(quotes);
message = "<p class='quote'>" + result.quote + "</p>";
message += "<p class='source'>" + result.source;
message += "<span class='citation'>" + result.citation + "</span>";
message += if(randQuote.year) { 
  stringQuote += <span class="year"> randQuote.year </span> 
}
message += "</p>";

document.getElementById('quote-box').innerHTML = message;
}

printQuote();

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
