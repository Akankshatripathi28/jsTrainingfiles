// js is a dynamic and loosely typed language

let primeNumber = 7;
primeNumber = 'seven';

// Number 
// integers, floats, decimals, doubles

let integer = 10;
let decimal = 23.6;
let negative = -70;
let negativeDecimal = -8.21;

typeof negative; // type of the value in the variable

console.log(typeof integer);

// strings
// a sequence of one more chars
// a-z, A-Z, 0-9, `~!@#$%^&*()_+-={}[]:;'"<,>./?|\ 
// enclosed in '' or "" or ``

const sentence = 'I am the 1st, sentence!';
const anotherSentence = "2. It is raining outside!!";
const backTickedStr = `%% &, 8 I am a backticked string`;

console.log(typeof sentence);

// boolean
// true or false

const isRaining = true;
const hasPakoda = false;
const isWishingToHavePakoda = true;

console.log(typeof isRaining);

// null (is not kind of a type.)
let nothing = null; // dont do this in your actual projects

// undefined
let noOfChairs; 

// collection types
// array

// HOMOGENOUS
const fibonacciSeries = [1, 1, 2, 3, 5, 8, 11];
const friends = ['a', 'b', 'c', 'd'];
const didPractice = [true, false, true, true];

// HETEROGENOUS
const assorted = [
    10, 21.5, 'word', false, undefined, null, 
    [1, 2, 3],
    { name: 'Priya' },
    function () {
        console.log('From inside an array')
    }
];

assorted[8]();


// object
// dictionary, Map, HasedMaps
// {}
// key: value

const person = {
    name: "Aniruddha",
    age: 29,
    isAdult: true,
    friends: ['a', 'b', 'c'],
    hasGirlfriend: null,
    brains: undefined,
    address: {
        city: 'Pune',
        state: 'MH',
        zip: 411004
    },
    name: "abcd", // overrides the first key
    petNames: ["ani", "aniruddha"],
    printName: function () {
        console.log('Aniruddha');
    }
}

person.name; // "Aniruddha"
person.Aniruddha // not correct
person.address.zip; // 411004
person.friends[1]; // 'b'
person.printName();

// function
function sayHello() {
    console.log('Hello, World!');
}

console.log(typeof sayHello);
