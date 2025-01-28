// function Declaration.
function greet(name){
    return `Hello, ${name}!`
}
let myGreeting = greet("Ruhul");
// console.log(myGreeting);

//function Expression.
const greet2 = function(name){
    console.log( `HI, ${name}!`)
    }
//greet2('Guest');

//Arrow Function.
const greet3 = (name)=> `Hei, ${name}!`
//console.log(greet3('Ruhul'));

// Higher-order Function
//map()
//double the number.
const numbers = [1,2,3,4,5];
const doubled = numbers.map((number)=>number * 2);
// console.log(`Doubled number is = ${doubled}`);

// filter
const even = numbers.filter((number)=> number % 2 == 0);

// console.log(`Even numbers are: ${even}`);

// reduce
// If you don't provide an initial value, reduce() will automatically use the first element of the array as the initial value of the accumulator (acc), and the reduction process will start from the second element.

// const sum = numbers.reduce((acc,num) => acc + num, 2 );
// console.log(sum);

// Practice Tasks:

// Write a function that calculates the area of a rectangle with default parameters.

// const width = 100;
// const height = 60;


const area = (width = 10, height = 10) => width * height;
//console.log(area());
// Use map() to convert an array of strings to uppercase.

const strings = ["hello", "world", "javascript", "is", "awesome"];

// const stringsUpperCase = strings.map((element)=>element.toUpperCase());
// console.log(stringsUpperCase);

// Use filter() to extract numbers greater than 50 from an array.

const array2 = [32,54,23,98,134,212,249,34,43,66,87];

const filter50 = array2.filter((num)=> num > 50 );

// console.log(filter50);

// Use reduce() to calculate the product of all numbers in an array.

const total = array2.reduce((acc,num) => acc * num, 1);
//console.log(`Product = ${total}`);