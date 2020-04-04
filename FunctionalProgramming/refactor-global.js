// The global variable
/*
Functional Programming: Refactor Global Variables Out of Functions

Rewrite the code so the global array bookList is not changed inside either function. 
The add function should add the given bookName to the end of the array passed to it 
and return a new array (list). The remove function should remove the given bookName 
from the array passed to it.

Note: Both functions should return an array, and any new parameters should be added 
before the bookName parameter.
*/
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (bookList, name) {
  let list = bookList;
  //bookList.add(bookName);
  return list.concat(name);
  
  // Change code above this line
}

// Change code below this line
function remove (bookList, name) {
  let list = [...bookList];
  let index = list.indexOf(name);
  if (index >= 0) {
    list.splice(index, 1);
    return list; 
  }
    // Change code above this line
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
console.log(bookList);
//console.log(newBookList);
console.log(newerBookList);
//console.log(newestBookList);
