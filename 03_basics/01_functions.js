
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
// console.log(loginUserMessage("sam"));


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));
//In this case 200 and 400 will be taken by val1 and val2 and the o/p will be in array giving only[500, 2000]. (... is reffered as rest and spread operator which depends on their use cases.


const user = {
    username: "Anubhav",
    price: 299
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "anu",
    price: 499
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

