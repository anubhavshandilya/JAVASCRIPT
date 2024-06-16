// Basically in JS there are two data types:
//Primitive (7 types): String, Boolean, null, undefined, Symbol, BigInt(scientific data value or bhut badi value)

/* JavaScript is a dynamically typed language. This means that the data type of a variable is determined by the value that is assigned to it, and can change throughout the program. For example, the following code is valid JavaScript:
var a = 1; // a is a number
a = "hello"; // a is now a string

In a statically typed language, the data type of a variable must be declared when the variable is created, and cannot change. For example, the following code is not valid Java:
int a = 1; // a is a number
a = "hello"; // this line will cause an error */

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); //false


const bigNumber = 66415471544686n

//Non-Primitive or Reference type
//Array, Objects, Functions

const heros = ["shaktiman", "arjun", "hatim"];
let myObj = {
    name : "Anubhav",
    age : 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeOf );

// https://262.ecma-international.org/5.1/#sec-11.4.3

/*Table  typeof Operator Results
Type of val	Result
Undefined	"undefined"
Null	"object"
Boolean	"boolean"
Number	"number"
String	"string"
Object (native and does not implement [[Call]])	"object"
Object (native or host and does implement [[Call]])	"function"
Object (host and does not implement [[Call]])	Implementation-defined except may not be "undefined", "boolean", "number", or "string". */