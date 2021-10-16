function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
var mainCharacter = {
     name: name,
     age: age,
     pronouns: pronouns
  };
  return mainCharacter;
}

/*function saveReview(msg, reviews) {
if (!reviews.includes(msg)) {
  reviews.push(msg);
}
return reviews;
}*/

/*function saveReview(msg, reviews) {
  for (var i = 0; i < reviews.length; i++) {
    if (msg !== reviews[i]) {
      reviews.push(msg);
    }
  }
}*/

//if the msgs are the same, don't add it
//.includes() is a method that checks is messages are
//already in a array

function calculatePageCount(title) {
  var wordcount = title.length;
  return wordcount * 20;
}

function writeBook(title, char, genre) {
  var book = {
    title: title,
    mainCharacter: char,
    pageCount: calculatePageCount(title),
    genre: genre
  };
  return book;
}

function editBook (book) {
  book.pageCount = book.pageCount * .75;
}

//should decrease pageCount to 3/4 of what it was.



module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
