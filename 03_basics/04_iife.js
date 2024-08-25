// Immediately Invoked Function Expressions (IIFE)

//Note: Jo function immediately execute hojaaye and Many times due to the pollution of global scope problems arrive so usi k variables so usko hatane k liye hamne IIFE ka use kiya jaata hai.

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

//unnamed IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('anubhav')