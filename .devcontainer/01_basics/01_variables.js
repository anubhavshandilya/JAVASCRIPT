const accountId = 14452
let accountEmail = "anubhav@google.com"
var accountPassword = "1234"
accountCity = "Jaipur"
let accountState;

// accountId = 2 //not allowed

accountEmail = "ac@ac.com"
accountPassword = "212121"
accountCity = "Bangalore"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])