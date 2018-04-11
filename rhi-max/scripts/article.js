'use strict';

let articles = [];


// COMMENT: What is the purpose of the following function? Why is its name capitalized? Explain the context of "this" within the function. What does "rawDataObj" represent?
// PUT YOUR RESPONSE HERE

function Article(rawDataObj) {
  // Use the JS object that is passed in to complete constructor function:
  // Save ALL the properties of `rawDataObj` into `this`
  this.title = rawDataObj.title;
  this.category = rawDataObj.category;
  this.author = rawDataObj.author;
  this.authorURL = rawDataObj.authorUrl;
  this.publishedOn = rawDataObj.publishedOn;
  this.body = rawDataObj.body;
}
console.log(articles);

Article.prototype.toHtml = function () {
  // COMMENT: What is the benefit of cloning the article? (see the jQuery docs)
  // PUT YOUR RESPONSE HERE

  let $newArticle = $('article.template').clone().removeClass('.template'); // makes a new article section html PER the function call

  /* TODO: This cloned article still has a class of template. In our modules.css stylesheet, we should give all elements with a class of template a display of none so that our template does not display in the browser. But, we also need to make sure we're not accidentally hiding our cloned article. */


  if (!this.publishedOn) $newArticle.addClass('draft'); //if this doesnt have a publishedOn THEN add class "draft"
  //style the draft class display none

  $newArticle.attr('data-category', this.category);
  //find() method
  $newArticle.find('address > a').append(this.author, this.authorUrl);
  $newArticle.find('h1').append(this.title);
  $newArticle.find('.article-body').append(this.body);
  $newArticle.attr('date-time').append(this.publishedOn);


  /* TODO: Now use jQuery traversal and setter methods to fill in the rest of the current template clone with values of the properties of this particular Article instance. (article [i])
    We need to fill in:
      1. author name,
      2. author url,
      3. article title,
      4. article body, and
      5. publication date. */



  // REVIEW: Display the date as a relative number of 'days ago'

  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn)) / 60 / 60 / 24 / 1000) + ' days ago');
  $newArticle.append('<hr>');

  $('.articles').append()
  return $newArticle;
};

rawData.sort(function (a, b) {
  // REVIEW: Take a look at this sort method; This may be the first time we've seen it. Look at the docs and think about how the dates would be sorted if the callback were not included in this method.
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

// TODO: Refactor these for loops using the .forEach() array method.

// for (let i = 0; i < rawData.length; i++) {
//   articles.push(new Article(rawData[i]));
// }

// rawData.forEach(function (val, i) {
//   articles.push(new Article(rawData[i]))
//   console.log(articles);
// });


// for (let i = 0; i < names.length; i++) {
//   console.log(i, names[i]);
// }

// names.forEach( function (val,i) {
//   console.log(i, val);
// });

// for (let i = 0; i < articles.length; i++) {
//   $('#articles').append(articles[i].toHtml());
// }

// articles.forEach(function (val, i) {
//   $('#articles').append(articles[i].toHtml());
// });

articles.push(new Article(rawData[0]));