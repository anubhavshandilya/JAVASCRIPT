// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Febuary");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("default case match");
        break;
}

//Anothe case let say if it would have been string in place of const month=3 then what we could have write is given below:

switch (key) {
    case "January":
        console.log("January");
        break;
    case "February":
        console.log("February");
        break;

    default:
        console.log("default case match");
        break;
}