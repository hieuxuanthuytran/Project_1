/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
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

// console.log(quotes);

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/
function getRandomQuote(){
  var randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum];
}
// console.log(getRandomQuote());

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
function printQuote(element){
  var k = getRandomQuote();
  var quoteSource = '<p class="quote">'+ k.quote + '</p>';
      quoteSource += '<p class="source">' + k.source; 
      if (k.citation !== ''){
      quoteSource += ' <span class="citation">' + k.citation + '</span>';
      }
      if (k.year !== ''){
      quoteSource +=  ' <span class="year">' + k.year + '</span></p>';
      }

  var element = document.getElementById('quote-box');
    element.innerHTML = quoteSource; 
  }
document.write(printQuote());
/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.