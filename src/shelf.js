
function shelfBook(book, shelf) {
 if (shelf.length < 3) {
 shelf.unshift(book);
} else {
 return shelf;
 }
}

function unshelfBook(name, shelfArray) {
for (var i = 0; i < shelfArray.length; i++) {
if (shelfArray[i].title === name) {
shelfArray.splice(i,1);
  }
 }
}

function listTitles(shelf) {
var titles = ""
for (var i = 0; i < shelf.length; i++) {
if (shelf.length-1 === i) {
titles = titles + shelf[i].title;
} else {
titles = titles + shelf[i].title + ", "
}
}
return titles;
}

function searchShelf(shelf, name) {
for (var i = 0; i < shelf.length; i++) {
  if (shelf[i].title === name) {
    return true;
  }
}
return false;
}
//create list of all titles on a shelf


//It is taking in a name, and an array. It needs to see if
//the name it is taking in matches the shelfArray[i].name
//and if it does, it needs to remove that book.



//if value === book.name, remove it.

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
