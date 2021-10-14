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

//if the msgs are the same, don't add it

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  // writeBook,
  // editBook
}
