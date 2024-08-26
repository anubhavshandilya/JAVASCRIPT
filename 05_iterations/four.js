const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

for (const key in map) {
    console.log(key);
}

//Note: Here in this case of map the o/p will not be iterable.
//Note: Agar object k andar loop lagana hoga toh hmlog 'for in' loop lagaynge and array k andar loop lagana hoga toh 'for of' loop lagaynge.