let word = 'JavaScript'
word[0] = 'Y'

// Cette expression ne modifie pas la chaîne stockée dans la variable word . On peut donc dire que les chaînes ne sont pas modifiables ou en d’autres termes immuables. Les types de données primitifs sont comparés par leurs valeurs. Comparons différentes valeurs de données. Voir l'exemple ci-dessous :
let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)      // true

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)             //false 

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff) // false"

// Les types de données non primitifs sont modifiables ou mutables. Nous pouvons modifier la valeur des types de données non primitifs après leur création. Voyons en créant un tableau. Un tableau est une liste de valeurs de données entre crochets. Les tableaux peuvent contenir des types de données identiques ou différents. Les valeurs du tableau sont référencées par leur index. En JavaScript, l'index du tableau commence à zéro. C'est-à-dire que le premier élément d'un tableau se trouve à l'index zéro, le deuxième élément à l'index un et le troisième élément à l'index deux, etc.

let nums = [1, 2, 3]
nums[0] = 10

console.log(nums)  // [10, 2, 3]

// Comme vous pouvez le voir, un tableau, qui est un type de données non primitif, est mutable. Les types de données non primitifs ne peuvent pas être comparés par valeur. Même si deux types de données non primitifs ont les mêmes propriétés et valeurs, ils ne sont pas strictement égaux.

let nums = [1, 2, 3]
let numbers = [1, 2, 3]

console.log(nums == numbers)  // false

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

console.log(userOne == userTwo) // false

// Nombres
// Déclaration des types de données numériques
// Déclaration des types de données numériques

let age = 35
const gravity = 9.81  // we use const for non-changing values, gravitational constant in  m/s2
let mass = 72         // mass in Kilogram
const Pi = 3.14       // pi a geometrical constant

// More Examples
const boilingPoint = 100 // temperature in oC, boiling point of water which is a constant
const bodyTemp = 37      // oC average human body temperature, which is a constant

console.log(age, gravity, mass, PI, boilingPoint, bodyTemp)

// Objet mathématique
// En JavaScript, l'objet mathématique fournit de nombreuses méthodes pour travailler avec les nombres.
const PI = Math.PI

console.log(PI)                            // 3.141592653589793

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding

console.log(Math.round(PI))                // 3 to round values to the nearest number

console.log(Math.round(9.81))              // 10

console.log(Math.floor(PI))                // 3 rounding down

console.log(Math.ceil(PI))                 // 4 rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value

const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum)

// Let us  create random number between 0 to 10

const num = Math.floor(Math.random () * 11) // creates random number between 0 and 10
console.log(num)

//Absolute value
console.log(Math.abs(-10))      // 10

//Square root
console.log(Math.sqrt(100))     // 10

console.log(Math.sqrt(2))       // 1.4142135623730951

// Power
console.log(Math.pow(3, 2))     // 9

console.log(Math.E)             // 2.718

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046

// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2)           // 0.6931471805599453
console.log(Math.LN10)          // 2.302585092994046

// Trigonometry
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)

// Cordes
let space = ' '           // an empty space string
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let quote = "The saying,'Seeing is Believing' is not correct in 2020."
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`

// Concaténation de chaînes
let fulName = firstName + space + lastName; // concatenation, merging two string together.
console.log(fulName);

// Concaténation à l'aide de l'opérateur d'addition
// Declaring different variables of different data types
let spaces = ' '
let firstNames = 'Asabeneh'
let lastNames = 'Yetayeh'
let countrys = 'Finland'
let citys = 'Helsinki'
let languages = 'JavaScript'
let jobs = 'teacher'
let ages = 250


let fullName =firstName + space + lastName
let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country; // ES5 string addition

console.log(personInfoOne)

// Longues chaînes littérales

const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)

// Séquences d'échappement dans les chaînes

console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

// I hope everyone is enjoying the 30 Days Of JavaScript challenge.
// Do you ?
// Days  Topics  Exercises
// Day 1 3 5
// Day 2 3 5
// Day 3 3 5
// Day 4 3 5
// This is a backslash  symbol (\)
// In every programming language it starts with "Hello, World!"
// In every programming language it starts with 'Hello, World!'
// The saying 'Seeing is Believing' isn't correct in 2020

// Littéraux de modèle (chaînes de modèle)
console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically

// Exemple : 2

let firstNamess = 'Asabeneh'
let lastNamess = 'Yetayeh'
let countryss = 'Finland'
let cityss = 'Helsinki'
let languagess = 'JavaScript'
let jobss = 'teacher'
let agess = 250
let fullNamess = firstName + ' ' + lastName

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)


// EXERCICE : Niveau 1

// 1.Déclarez une variable nommée challenge et attribuez-lui une valeur initiale '30 Days Of JavaScript' .

let challenge = '30 Days Of Javascript'

let firstLetter = string[0]
let secondLetter = string[1]
let thirdLetter = string[2]
let fourthLetter = string[3]
let fifthLetter = string[4]

console.log(index);