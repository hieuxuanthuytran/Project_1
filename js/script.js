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

function getRandomColor(){
  var randomColor = Math.floor(Math.random * 256) +1;
  var backGround = 'rgb(' + randomColor + ', ' + randomColor + ', ' + randomColor + ')';
  return backGround;
}

// Create a function to print quotes

function printQuote(div){
  var k = getRandomQuote();
  var quoteSource = '<p class="quote">'+ k.quote + '</p>';
      quoteSource += '<p class="source">' + k.source; 
      if (k.citation !== ''){
      quoteSource += ' <span class="citation">' + k.citation + '</span>';
      }
      if (k.year !== ''){
      quoteSource +=  ' <span class="year">' + k.year + '</span></p>';
      }
  var div = document.getElementById('quote-box');
    div.innerHTML = quoteSource; 
    div.style.background = getRandomColor();
  }

// Create a link to load quote

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
