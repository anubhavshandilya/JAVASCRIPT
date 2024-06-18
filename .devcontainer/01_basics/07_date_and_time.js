// A/c to the MDN doc, WE CAN DECLARE THE DATE given below, the date starts at the beginning of January1, 1970 UTC.

// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// Note- In JavaScript the months starts from 0.

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString()); (It will give date with exact time)

// let myCreatedDate = new Date("2023-01-2024") //{Type of format}
// console.log(myCreatedDate.toLocaleString);

// let myCreatedDate = new Date("01-14-2023") //{another format}
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); //{for comparison between stamps}

// let myTimeStamp = Date.now() // will give current date
// Commonly asked in interview to convert it into seconds so what we do is given below,  
// console.log(Math.floor(Date.now()/1000)); //{Math.floor will give exact value by rounding off}

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

//`${newDate.getDay()} and the time `

// another way of defining the dates in a precise manner and also we can use the shortcvut ctrl + space to take the use of intellisense to give us the suggestions.
newDate.toLocaleDateString('default', {
    weekday: "long",
})
