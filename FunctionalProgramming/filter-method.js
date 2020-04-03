/*
Functional Programming: Implement the filter Method on a Prototype

Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). 
You may use a for loop or the Array.prototype.forEach() method.
*/
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  // Only change code below this line
  var newArray = [];
  this.forEach(item => {
    if(callback(item) === true){
      return newArray.push(item);
    }
    //callback(item) === true ? newArray.push(item):newArray;
  })
  // Only change code above this line
  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});
console.log(new_s);