/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

// Created an array of quote objects
var quotes = [{
  quote: 'Without music, life would be a mistake',
  source: 'Friedrich Nietzsche',
  citation: 'Brainpickings: Nietzsche on the Power of Music: https://www.brainpickings.org/2015/09/18/nietzsche-on-music/',
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
// Created a function to print the quotes and change the background color at random
function printQuote() {
var message = "";    
var result = getRandomQuote(quotes);
message = "<p class='quote'>" + result.quote + "</p>";
message += "<p class='source'>" + result.source;
if (randomQuote.citation != 'Unknown') {
  html += '<span class="citation">' + randomQuote.citation + '</span>';
}
if (randomQuote.year != 'Unknown') {
  html += '<span class="year">' + randomQuote.year + '</span>';
message += "</p>";

document.getElementById('quote-box').innerHTML = message;

randomBackgroundColor();
    
setInterval()
}
// This allows the quote to change every 12 seconds

setInterval('printQuote()', 12000);

// Created a random color generator, source: https://www.w3resource.com › javascript-math-exercise-40
const randomBackgroundColor = () => {
	red = Math.floor(Math.random() * 256);
	green = Math.floor(Math.random() * 256);
	blue = Math.floor(Math.random() * 256);
	let color = `rgb(${red}, ${green},  ${blue})`;

   	document.body.style.backgroundColor = color;
   };

printQuote();

document.getElementById('loadQuote').addEventListener("click", printQuote, false);}