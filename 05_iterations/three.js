// for of

// ["","",""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for(const num of arr){
    //console.log(num);
}

const greetings = "Hello world!"
for(const greet of greetings){
    //console.log(`Each char is ${greet}`)
}

// Maps(It is known for the unique value and jis order k andar hamne diya hai usi k andar rahti hai.)

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

//console.log(map)

for (const [key, value] of map) {
    console.log(key, ':-', value);
}
