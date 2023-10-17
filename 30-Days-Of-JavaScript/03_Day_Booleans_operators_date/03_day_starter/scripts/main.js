// Example: Boolean Values

let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3    // true
let falseValue = 4 < 3  // false

// Undefined

let firstName
console.log(firstName) //not defined, because it is not assigned to a value yet

// Null

let empty = null
console.log(empty) // -> null , means no value

// Operators
// Assignment operators

let firstNames = 'Asabeneh'
let country = 'Finland'

// Arithmetic Operators

// Addition(+): a + b
// Subtraction(-): a - b
// Multiplication(*): a * b
// Division(/): a / b
// Modulus(%): a % b
// Exponential(**): a ** b

let numOne = 4
let numTwo = 3
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo

console.log(sum, diff, mult, div, remainder, powerOf) // 7,1,12,1.33,1, 64

const PI = 3.14
let radius = 100          // length in meter

//Let us calculate area of a circle
const areaOfCircle = PI * radius * radius
console.log(areaOfCircle)  //  314 m


const gravity = 9.81      // in m/s2
let mass = 72             // in Kilogram

// Let us calculate weight of an object
const weight = mass * gravity
console.log(weight)        // 706.32 N(Newton)

const boilingPoint = 100  // temperature in oC, boiling point of water
const bodyTemp = 37       // body temperature in oC


// Concatenating string with numbers using string interpolation
/*
 The boiling point of water is 100 oC.
 Human body temperature is 37 oC.
 The gravity of earth is 9.81 m/s2.
 */
console.log(
  `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
)

// Comparison Operators
// Example: Comparison Operators

console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false

// Logical Operators

// && ampersand operator example

const checks = 4 > 3 && 10 > 5         // true && true -> true
const chks = 4 > 3 && 10 < 5         // true && false -> false
const hecks = 4 < 3 && 10 < 5         // false && false -> false

// || pipe or operator, example

const cecks = 4 > 3 || 10 > 5         // true  || true -> true
const check = 4 > 3 || 10 < 5         // true  || false -> true
const checs = 4 < 3 || 10 < 5         // false || false -> false

//! Negation examples

let cheks = 4 > 3                     // true
let chcks = !(4 > 3)                  //  false
let isLightOns = true
let isLightOffs = !isLightOn           // false
let isMarrieds = !false                // true

// Increment Operator
// Pre-increment
let count = 0
console.log(++count)        // 1
console.log(count)          // 1

// Post-increment
let counts = 0
console.log(count++)        // 0
console.log(count)          // 1

// Decrement Operator
// Pre-increment
let counte = 0
console.log(--count)        // 1
console.log(count)          // 1

// Post-increment
let countse = 0
console.log(count--)        // 0
console.log(count)          // 1

// Ternary Operators

let isRaininng = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
isRaining = false

isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')

//   You need a rain coat.
//   No need for a rain coat.

let number = 5
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)
number = -5

number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)

//   5 is a positive number
//   -5 is a negative number

// Operator Precedence
// Window alert() method

alert(message)
alert('Welcome to 30DaysOfJavaScript')

// Window prompt() method

prompt('required text', 'optional text')

let numbers = prompt('Enter number', 'number goes here')
console.log(number)

// Window confirm() method

const agree = confirm('Are you sure you like to delete? ')
console.log(agree) // result will be true or false based on what you click on the dialog box

// Date Object
// Creating a time object

const noow = new Date()
console.log(noow) // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)

// Getting full year
const noww = new Date()
console.log(noww.getFullYear()) // 2020

// Getting month
const nowse = new Date()
console.log(nowse.getMonth()) // 0, because the month is January,  month(0-11)

// Getting date
const nows = new Date()
console.log(nows.getDate()) // 4, because the day of the month is 4th,  day(1-31)

// Getting hours
const now = new Date()
console.log(now.getHours()) // 0, because the time is 00:56:41

// Getting minutes
const minutes = new Date()
console.log(minutes.getMinutes()) // 56, because the time is 00:56:41

// Getting seconds
const secondes = new Date()
console.log(secondes.getSeconds()) // 41, because the time is 00:56:41

// Getting time
// Using getTime()
const Time = new Date() //
console.log(Time.getTime()) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

// Using Date.now()
const allSeconds = Date.now() //
console.log(allSeconds) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds) // true

const Now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minute = now.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56









































