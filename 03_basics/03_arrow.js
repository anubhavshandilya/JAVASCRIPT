//This function refers to the current context

const user = {
    username: "Anubhav",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);       
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// When we are in node environment "this" refers to the empty parenthesis{}

// Browser k andar jo window object hai use hi global object kehte hai

// function chai(){
//     let username = "anubhav"
//     console.log(this);
// }

// chai()

// another method

// const chai = function(){
//     let username = "anubhav"
//     console.log(this);
// }

//below instead of writing function we have used arrow function by using "() =>".
const chai = () => {
    let username = "anubhav"
    console.log(this);
}

// chai()

//Basic arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//One more to write is by doing implicit return which goes by:

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

//In the case of line 58 we can see clearly that if we have return an object then we have to wrap it inside the paerenthesis so that the output can not come as undefined.
const addTwo = (num1, num2) => ({username: "anubhav"})

//NOTE: if we are using parenthesis like{} then it is necessary to write "return" as we can see above but if we are using () then there is no need of writing return and this concept mostly used in react.

console.log(addTwo(3, 4));

//Just a bit of loop concept like how we use it

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()