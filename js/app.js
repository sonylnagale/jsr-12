/*
  Please add all Javascript code to this file.
*/

// var defaultURL = 'https://newsapi.org/v2/top-headlines?' +
//           'country=us&' +
//           'apiKey=a557903c3a56475285f31f2a306fb69a';
// var req = new Request(url);
// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     })


var newsSource = 'country=us';
var ign = 'sources=ign';
var bReport = 'sources=bleacher-report';
var tCrunch = 'sources=techcrunch';
var engadget = 'sources=engadget';
var reddit = 'sources=reddit-r-all';
var https = 'https://newsapi.org/v2/top-headlines?'
var api = '&apiKey=a557903c3a56475285f31f2a306fb69a';

var url =  https + newsSource + api;
var ignURL = https + ign + api;
console.log(url);
console.log(ignURL);

$.ajax({
  url: url,
  method: 'GET',
}).done(function(data) {
  var articles = data.articles;
  var title = data.articles[2].title;
  console.log(data);
  console.log(articles);
  console.log(title);
})

//console.log(req);
