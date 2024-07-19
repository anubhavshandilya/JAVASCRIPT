// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Ironman", "Hulk"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

//push method basically adds the value
// myArr.push(6)
// myArr.push(7)
//pop method removes the last value from the array.
// myArr.pop()

//this unshift method will add the value at the starting of the array value.
// myArr.unshift(9)
//shift method will remove the starting value from the array.
// myArr.shift()

// console.log(myArr.includes(9)); //it will give the boolean value
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2);