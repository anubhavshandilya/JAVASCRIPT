// singleton {objects singleton literals se nahi banta hai, constructor se banta hai}
// object.create {constructor}

// object literals

// const JsUser = {} //{}- this objects, however this is an empty object.

const mySym = Symbol("key1")

const JsUser = {
    name: "Anubhav",
    "full name": "Anubhav Sinha",
    [mySym]: "mykey1"
    age: 18,
    location: "Patna",
    email: "anubhav@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "anubhav@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "anubhav@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());