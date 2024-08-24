// var c = 300
let a = 300
if(true){
   let a = 10
   const b = 20
   console.log("INNER:", a); 
}

// The difference between block and global scope variable is that block scope is written inside the curly braces and global scope is written outside it.


console.log(a);
// console.log(b);
// console.log(c);
