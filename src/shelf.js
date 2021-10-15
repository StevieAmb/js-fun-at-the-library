
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





//It is taking in a name, and an array. It needs to see if
//the name it is taking in matches the shelfArray[i].name
//and if it does, it needs to remove that book.



//if value === book.name, remove it.

module.exports = {
  shelfBook,
  unshelfBook,
  // listTitles,
  // searchShelf
};
