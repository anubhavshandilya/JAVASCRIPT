// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
/* The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons converty null to a number, treating it as 0. That's why (13) null>=0 is true and (11) null>0 is false.*/

// console.log(undefined == 0); // false
// console.log(undefined > 0); // false
// console.log(undefined < 0); //false

// ===

console.log("2" === 2); //false because it will start checking the both data types individually.
