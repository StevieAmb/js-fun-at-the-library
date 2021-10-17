function createLibrary (name) {
 var library = {
  name: name,
  shelves: {
   fantasy: [],
   fiction: [],
   nonFiction: []
  }
 }
 return library;
}

function addBook (library, name) {
  library.shelves[name.genre].push(name);
}

function checkoutBook (library, title, shelf) {
 var specificShelf = library.shelves[shelf];
 for (var i = 0; i < specificShelf.length; i++) {
  if (specificShelf[i].title === title) {
    specificShelf.splice(i, 1);
    return `You have now checked out ${title} from the ${library.name}`;
  }
return `Sorry, there are currently no copies of ${title} available at the ${library.name}`
 }
}

//if book IS on shelf return You have now checked out
//IF book not on shelf, return different string
// has to have the book on the shelf
// IF book not on shelf, return different string
// be aware of what books are on the shelf
//title has to equal name of book on the shelf and has to be dynamic






module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
