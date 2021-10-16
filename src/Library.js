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

function checkoutBook (library, title, genre) {
return `You have now checked out ${title} from ${library.name}`
}





module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
