
function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("U");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("V");
}

// sayMyName()

//functions k andar jo input ya value banate hai usey kehte hai parameters and jab function ko call karate hai aur jab uske andar value pass karte hai usey kehte hai arguments.
// function addTwoNumbers(number1, number2){ //number2 is an example of parameter
//    console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

function loginUserMessage(username = "anubhav"){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("anubhav"));
console.log(loginUserMessage("sam"));