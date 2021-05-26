const name = 'Sajid';
const greeting = 'Hello!';

// concatenation
// joining/merging
// + operator

let fullGreeting = greeting + name;
console.log(fullGreeting);

fullGreeting = greeting + ' ' + name;
console.log(fullGreeting);

// es6+ way
fullGreeting = `${greeting} ${name}`; // RECOMMENDED
console.log(fullGreeting);

const word = 'keyboard';

word.length; // length of the string
word.toUpperCase(); // all chars converted to CAPS
word.toLowerCase(); 

word.slice(2); // yboard
word.slice(2, 6) // yboar

word.replace('d', 't'); 
// replaces the FIRST OCCURENCE of the char d

word.split(); // convert a string to array

const friends = 'A, B, C, D';

friends.split(', ');


// IMMUTABILITY

//          value == literal
let time = 'yesterday';
time = 'today'; // NOT IMMUTABILITY

time[2]; // s
time[2] = 'q'; // NOT ALLOWED

// strings over
