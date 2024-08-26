//const coding = ["js", "java", "ruby", "python", "cpp"]

// const values = coding.forEach( 
//     (item) => {
//         console.log(item);
//         return item
//         //Here in this case of 'for each' we have to manually write return item. 
//     } 
// )

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNums = myNums.filter( (num) => num > 4 )

//One more way to write line 15 using scope but the thing that we have to keep in mind is that we have to write return as well otherwise it will give empty array like this [].

// const newNums = myNums.filter( (num) => {
//     return num > 4
// })

//Let say if we would have to write line 19 not using .filter but by using 'for each' then it would go like:

// const newNums = []

// myNums.forEach( (num) => {
//     if(num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1985, edition: 2006},
    {title: 'Book Three', genre: 'Horror', publish: 1984, edition: 2008},
    {title: 'Book Four', genre: 'Science', publish: 1988, edition: 2003},
    {title: 'Book Five', genre: 'Comedy', publish: 1989, edition: 2001},
    {title: 'Book Six', genre: 'Kids', publish: 1990, edition: 2009},
    {title: 'Book Seven', genre: 'Science', publish: 1981, edition: 2015},
    {title: 'Book Eight', genre: 'Fiction', publish: 1990, edition: 2016},
];

const userBooks = books.filter( (bk) => bk.genre === 'History' )

userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
} )

console.log(userBooks);
