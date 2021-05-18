const person={
    name:"Akanksha",
    surname:"Tripathi",
    age:"21",
    address:{
        city:"mumbai",
        state:"MH"
    },
    contact:["7447267179","9028557515"],



};


console.log(person);
const keys=Object.keys(person);  //object.key is a method which returns an array
console.log(keys);

person.address.city;
person.age;
console.log(person.address.city);



//DESTRUCTURUING
// const personName1=person.name;//shortcut for this u can use destructuring
const{name,surname}=person;
console.log(name,surname);

const{name:personName}=person;  //rename









