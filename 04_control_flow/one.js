// if
// const isUserLoggedIn = true
// const temperature = 41

// if( temperature === 41 ){
//     console.log("less than 50");
// }else{
//     console.log("temperature is greater than 50");   
// }

// <, >, <=, >=, ==, !=, ===, !==, ||(Used to check for multiple conditions)

// const score = 200

// if(score > 100){
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

// const balance = 1000

//Note: Below on line 25 is a very immature way to write code so try not to keep it in one line.

// if(balance > 500) console.log("test"),console.log("test2");

// if(balance < 500){
//     console.log("less than 500");
// } else if(balance < 750){
//     console.log("less than 750");
// } else if(balance < 900){
//     console.log("less than 750");  
// } else(balance < 1200){
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy Course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("userLoggedIn");
}