/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes = [
  {
    quote: `“There’s an apocryphal story about Mozart. A 14-year-old came to him and said, “I want to learn to be a great composer.” And Mozart said, “You’re too young.” The young man replied, 
    “But I’m 14 years old and you were only 8 or 9 when you started composing.” To which Mozart replied, “Yes, but I wasn’t running around asking other people how to do it.”`,
    source:  `-Charlie Munger`,
    citation: 'VP Berkshire Hathaway- Journal Meeting', 
    year: '2015'
  },
  
  {
    quote:`The way to get started is to quit talking and begin doing.`,
    source: `-Charlie Munger`,
    citation: 'VP Berkshire Hathaway - quotesten.com',
    year: '2013'
  
  },
  
  {
    quote: `If life were predictable it would cease to be life, and be without flavor.`,
    source: `-Eleanor Roosevelt`,
    citation: 'www.brainyquote.com',
    year: '1959'
  },
  
  {
    quote: `If you think you are too small to make a difference, try sleeping with a mosquito.`,
    author: `-Dali Lama`, 
    citation: 'https://www.inc.com',
    year:'2020'
  
  },

  
  {
    quote: `Life is what happens when you're busy making other plans.`,
    source: `-John Lennon`,
    citation: 'wwww.fastjetperformance.com',
    year:'1957'
  },
  
];
  

/***
 `getRandomQuote` function*/
// Random number generator
function getRandomQuote(array) {
  var quoteIndex = Math.floor(Math.random() * (quotes.length));
  for (var i = 0; i < array.length; i++) {
      var randomQuote = array[quoteIndex];
  }
  return randomQuote;
}


/***`printQuote` function */


function printQuote() {
  var message = "";     
  var result = getRandomQuote(quotes);
  message = "<p class='quote'>" + result.quote + "</p>";
  message += "<p class='source'>" + result.source;
  message += "<span class='citation'>" + result.citation + "</span>";
  message += "<span class='year'>" + result.year + "</span>"
  message += "</p>";

  document.getElementById('quote-box').innerHTML = message;
}
// Calling the function atleast once , so that we don't get blank screen for the first time.

printQuote(); 


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('load-quote').addEventListener("click", printQuote, false);