//Intermediate Algorithm Scripting: Seek and Destroy

function destroyer(arr) {
    let newArr = [...arr]
    for(let i = 1; i < arguments.length; i++){
        newArr = newArr.filter(item => item !== arguments[i])
    }
    return newArr;
  }
  
console.log(destroyer([1, 2, 3, 1, 2, 3], 9, 2));
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));