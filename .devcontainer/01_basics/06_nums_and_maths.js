const score = 400
//console.log(score);

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString().length); //it will show the length of the string like for 100 it will be 3

//console.log(balance.toFixed(2)); // generally used in e-commerce applications to show the pricings{ex: o/p will be 100.00}

const otherNumber = 123.8966
//console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
//console.log(hundreds.toLocaleString()); //In this case the commas will be separated a/c to US number system standards like 100,000,000)

//console.log(hundreds.toLocaleString('en-IN')); //Here in this as inside the method we have specified the indian standard configuration so it will come like 10,00,000)

// ++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); // abs stands for absolute value as in this case -4 will be converted into +ve 4 but positive number will remain positive in this case.

console.log(Math.round(4.6)); // 0/P- 5
console.log(Math.ceil(4.2)); // 0/P- 5 (as it will consider from top)
console.log(Math.floor(4.9)); //O/P- 4 (as it will consider from bottom)

console.log(Math.min(4, 3, 2, 8)); // In this array it will find the least value of number.
console.log(Math.max(5, 8, 3, 9, 4)); // In this array it will the maximum value of number.

console.log(Math.random()); // In this case it will give value between 0 and 1.
console.log((Math.random()*10) + 1); // use this formula if we have to print a/c to pblm statement like print between 0 1nd 6 and so on
console.log(Math.floor(Math.random()*10) + 1); // same goes with this also but here s we have used math.floor also so it will round-off to the lowest value and her we are adding one cause it should not give value of zero so whatever it gives more than 1 and aage kitna bhi hosakta hai.

const min = 10
const max = 20
// Here in this case we have to give max and min value 

console.log(Math.floor(Math.random() * (max - min + 1)));