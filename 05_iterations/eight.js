const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0 )


//Now we are writing this using arrow function

const myTotal = myNums.reduce( (acc, currval) => acc+currval, 0 )

//console.log(myTotal);


const shoppingCart = [
    {
        itenName: "js course",
        price: 2999
    },
    {
        itenName: "web dev course",
        price: 6999
    },
    {
        itenName: "python course",
        price: 999
    }
]

//Above lines of code regarding shopping cart is about a website which provides courses and if we have add all the prices as we can see a student buys so by using reduce how we can add is given below,

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )

console.log(priceToPay);
