// var c = 300
let a = 300
if(true){
   let a = 10
   const b = 20
   // console.log("INNER:", a); 
}

// The difference between block and global scope variable is that block scope is written inside the curly braces and global scope is written outside it.


// console.log(a);
// console.log(b);
// console.log(c);

//How Nested scope works
function one(){
   const username = "Anubhav"

   function two(){
      const website = "youtube"
      console.log(username);
   }
   // console.log(website);

   two()
 
}

// one()

if(true){
   const username = "anubhav"
   if(username === "anubhav"){
      const website = " youtube"
      // console.log(username + website);
   }
   // console.log(website);
}

// console.log(username);

// +++++++++++++INTERESTING++++++++++++++++++


//Here in this case the o/p will come as 6 as it is a correct syntax.
console.log(addone(5));

function addone(num){
   return num + 1
}


// In the below case the o/p will give error as here in line 53 we have declared and after that in function also we have declared due to which it will throw error as we are acessing the function before the declaration.
addTwo(5)
const addTwo = function(num){
   return num + 2
}
