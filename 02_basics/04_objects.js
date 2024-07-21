//  const tinderUser = new Object() {Singleton object}
 const tinderUser = {} //{non-singleton object}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

//  console.log(tinderUser);

//Is tarah se jitna chahe utna nesting kar sakte hai
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "anubhav",
            lastname: "sinha"
        }
    }
}
//aur is tarah easily .log karke values access kar sakte hain
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    }
    {
        id: 2,
        email: "b@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(object.keys(tinderUser));
// console.log(object.values(tinderUser));
// console.log(object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999"
    courseInstructor: "anubhav"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "anubhav",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]