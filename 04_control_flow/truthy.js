const userEmail = "a@anubhav.ai"

// const userEmail = ""

// const userEmail = []

//Note: let say if in case in line 1 if the string would have been empty like const userEmail = "" then the o/p would have come as don't have user email as it assumed there is no email is given and in line 1 it assumed the email is given as we can clearly see it. Let say if const userEmail = [] means array would have been given then also it would have assumed the o/p as Got user email.

if(userEmail){
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

//Falsy values: false, 0, -0, BigInt, 0n(it is zero n), "", null, undefined, NaN(Not a number)

//Note: string k andar agar koi bhi value dete hai ya even space bhi dete hai then it will be considered as truthy value.

//truthy values: "0", 'false', " ", [], {}, function(){}-It is empty function which is also a truthy value.

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

//Note: let say if we go to browser and then inspect on the console and write the below conditions, the following results will come:
//false == 0 (o/p: true)
//false == ''(o/p: true)
//0 == '' (o/p: true)