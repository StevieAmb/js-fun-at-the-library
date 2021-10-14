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

function saveReview(msg, reviews) {
if (!reviews.includes(msg)) {
  reviews.push(msg);
}
return reviews;
}

function calculatePageCount(title) {
  var wordcount = title.length;
  return wordcount * 20;

}
//if the msgs are the same, don't add it
//.includes() is a method that checks is messages are
//already in a array

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  // writeBook,
  // editBook
}
