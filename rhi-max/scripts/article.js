'use strict';

let articles = [];


// COMMENT: What is the purpose of the following function? Why is its name capitalized? Explain the context of "this" within the function. What does "rawDataObj" represent?
// The purpose of the function below is to ensure that the blogArticles.js array of objects is actually being used  later in the code.
// The reason that the name is capitilized is because thats the custom to indicate a constructor function

function Article(rawDataObj) {
  // Use the JS object that is passed in to complete constructor function:
  // Save ALL the properties of `rawDataObj` into `this`
  this.title = rawDataObj.title;
  this.category = rawDataObj.category;
  this.author = rawDataObj.author;
  this.authorUrl = rawDataObj.authorUrl;
  this.publishedOn = rawDataObj.publishedOn;
  this.body = rawDataObj.body;

  console.log(articles);
}

Article.prototype.toHtml = function () {
  // COMMENT: What is the benefit of cloning the article? (see the jQuery docs)
  // The benefit of cloning the artical within the function is so that there is the ability of changing the way it functions later in this function.

  let $newArticle = $('article.template').clone(); // makes a new article section html PER the function call
  $newArticle.removeClass('template');

  if (!this.publishedOn) {
    //if this doesnt have a publishedOn THEN add class "draft"
    //style the draft class display none
    $newArticle.addClass('draft');
  }
  $newArticle.attr('data-category', this.category);


  $('article').find('h1').replaceWith(this.title);
  $('article').find('.article-body').replaceWith(this.body);
  $('article').find('address > a').replaceWith(`<a href = $(this.authorUrlx)>author</a>`);
  $('article').find('address > a').replaceWith(this.author);

  /* DONE: Now use jQuery traversal and setter methods to fill in the rest of the current template clone with values of the properties of this particular Article instance. (article [i]) */

  // REVIEW: Display the date as a relative number of 'days ago'

  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn)) / 60 / 60 / 24 / 1000) + ' days ago');
  $newArticle.append('<hr>');
  return $newArticle;
};

rawData.sort(function (a, b) {
  // REVIEW: Take a look at this sort method; This may be the first time we've seen it. Look at the docs and think about how the dates would be sorted if the callback were not included in this method.
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

// DONE: Refactor these for loops using the .forEach() array method.
// issues with this making infinite loops has arised, seemingly unfixable but had to rid of the commented out code.

rawData.forEach(function (articleObject) {
  articles.push(new Article(articleObject));
});

articles.forEach(function (article) {
  $('#articles').append(article.toHtml());
});
