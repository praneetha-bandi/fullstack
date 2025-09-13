//print statement
console.log("SRIT")

//Data types in js

num = 12;
str = "hi";
bol = true;
bigint = 72508520852566548543;
//undefined
undefined;
null1 = null;

//var,let,const

var name1 = "srit";
console.log(name1)
var name1 = "hi";
console.log(name1)

let course = "cse";

let age = 20;
console.log(age)
age = 21;
console.log(age)

const givenname = "srinivasa rit";
console.log(givenname)


//functions 

function generateWelcomeMessage(name) {
    return "Welcome, " + name + "! Good Morning";
}

let welcome_message = generateWelcomeMessage(givenname)

console.log(welcome_message)

let addage=age+2;
let subage=age-2;
let mulage=age*2;
let divage=age/2;

console.log(addage)
console.log(subage)
console.log(mulage)
console.log(divage)

console.log("webpage")
 let length=6;
 let width=5;
 area = length*width;
 console.log(area)

function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

// Example usage:
const number = 5;
console.log(`Factorial of ${number} is: ${factorial(number)}`);

