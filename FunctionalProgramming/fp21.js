// The global variable
//Functional Programming: Apply Functional Programming to Convert Strings to URL Slugs
var globalTitle = "Winter Is Coming";

// Only change code below this line
function urlSlug(title) {
  return (
    title.toLowerCase()).split(/\s/)
    .filter(item => item ? item !== "" : item).join("-");
}
// Only change code above this line
