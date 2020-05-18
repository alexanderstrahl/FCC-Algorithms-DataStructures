var Person = function(fullName) {
    // Complete the method below and implement the others similarly
    //this.first = fullName.split(" ")[0]
    //this.last = fullName.split(" ")[1]
    let full = fullName.split(" ");
    //constructor(first) {this.first = first;}
    this.getFullName = function() {
      //return this.first + " " + this.last;
      return full[0] + " " + full[1];
    };
    this.getFirstName = function() {
      return full[0]; 
    }
    this.getLastName = function() {
      return full[1];
    }
    this.setFirstName = function(first) {
      full[0] = first
    }
    this.setLastName = function(last) {
      full[1] = last
    }
    this.setFullName = function(fullName){
      let newFull = fullName.split(" ");
      full[0] = newFull[0];
      full[1] = newFull[1]
    }
  };
  
  
  var bob = new Person('Bob Ross');
  //bob.setFullName("Haskell Curry")
  console.log(bob.getFullName());
  console.log("object keys:", Object.keys(bob).length);
  console.log(bob.getFirstName())