const name = "anubhav"
const repoCount = 60

// console.log(name + repoCount + " value"); {Try not to use this syntax as looks clumsy, rather than refer below}

console.log(`Hello my name is ${name} and my repo count is ${count}`); //{This method is called string interpolation}

//Other way of string declaration 
const gameName = new String('anubhav-as')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('v'));

const newString = gameName.substring(0, 5) // (But in substring we can not give negative value)
console.log(newString);

const anotherString = gameName.slice(-7, 4) //it will start from reverse in this case
console.log(anotherString);

const newStringOne = "   anubhav   "
console.log(newStringOne); // it will simply print as it is
console.log(newStringOne.trim()); // it will remove extra spaces when use this method.

const url = "https://anubhav.com/anubhav%20sinha"

console.log(url.replace('%20', '-'));

console.log(gameName.split('-'));

console.log(url.includes('gaspby')); //will tell whether this element is in string or not?//