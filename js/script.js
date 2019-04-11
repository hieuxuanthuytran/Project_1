/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
// Create an array of objects
let quotes = [
  {
    quote: 'Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday\'s code.', 
    source: 'Dan Salomon',
    citation: '',
    year: ''
  },
  {
    quote: 'People don\'t care about what you say, they care about what you build.',
    source: 'Mark Zuckerberg',
    citation: '',
    year: ''
  },
  {
    quote: 'Don\'t comment bad code - rewrite it.',
    source: 'Brian Kernighan',
    citation: '',
    year: ''
  },
  {
    quote: 'Always code as if the guy who ends up maintaning your code will be a violent psychopath who knows where you live.',
    source: 'Rick Osborne',
    citation: '',
    year: ''
  },
  {
    quote: ' If you optimize everything, you will always be unhappy.',
    source: 'Donald Knuth',
    citation: '',
    year: ''
  },
  {
    quote: 'Finding your purpose isn\'t enough.',
    source: 'Mark Zuckerberg',
    citation: '',
    year: 2017
  },
  {
    quote: 'No one can make you feel inferior without your consent.',
    source: 'Eleanor Roosevelt',
    citation: 'This is My Story',
    year: 1939
  },
  {
    quote: 'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.',
    source: 'Martin Luther King Jr.',
    citation: 'A Testament of Hope: The Essential Writings and Speeches',
    year: 1986
  },
  {
    quote: "Without music, life would be a mistake.",
    source: 'Friedrich Nietzsche',
    citation: 'Twilight of the Idols',
    year: 1889
  },
  {
    quote: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
    source: 'Mahatma Gandhi',
    citation: '',
    year: ''
  },
  {
    quote: 'Get busy living, or get busy dying',
    source: 'Tim Robbins',
    citation: 'as Andy Dufresne in The Shawshank Redemption',
    year: ''
  }
];

console.log(quotes);

// Create a function to get random quotes

function getRandomQuote(){
  var randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum];
}

// Create a function to print quotes

function printQuote(){
  var k = getRandomQuote();
  var completeQuote = '<p class="quote">'+ k.quote + '</p>';
      completeQuote += '<p class="source">' + k.source; 
      if (k.citation !== ''){
      completeQuote += ' <span class="citation">' + k.citation + '</span>';
      }
      if (k.year !== ''){
      completeQuote +=  ' <span class="year">' + k.year + '</span></p>';
      }
  var quoteBox = document.getElementById('quote-box');
    quoteBox.innerHTML = completeQuote; 
  }

// Automatically change the quote after 5s

setInterval(printQuote,5000);

// Create an array contains some background colors

let color = ['pink', 'grey', 'black', 'purple', 'rgb(147,196,125)', 'rgb(69,129,142)', 'rgb(191,144,0)','rgb(224,102,102)', 'rgb(194,123,160)', 'rgb(19,79,92)'];

// Create a function to get random background colors and link with body tag

function changeBackground(){
  document.getElementsByTagName('body')[0].style.background = color[Math.floor(Math.random() * color.length)];
}

// Automatically change the background color after 5s

setInterval(changeBackground, 5000);

// Create a link to load quote and change quote when clicking

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
