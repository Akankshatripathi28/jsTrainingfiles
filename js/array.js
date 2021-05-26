const character=['dr house','lisa cuddy','sheldon','bran stalk'];
const length=character.length;
character.push('thor');//add element to the array
console.log(character);

character.unshift('spiderman');  //add the element at the front

character.splice(2,0,'hulk');    //used to add the elements in the between if the array 

console.log(character);


//DELETE THE ITEMS FROM THE ARRAY

let deleteItem=character.pop();
console.log(character);
console.log(deleteItem);

deleteItem=character.shift();   //delete the first element from array

console.log(character);

//DELETE IN BETWEEN

deleteItem=character.splice(1,3);


//DESTRUCTURING

const number=[1,2,3,4,5];
const numberCopy=number;

numberCopy.push(6);
numberCopy.push(7);
 console.log(number);//array stores the reference of the variable hence there is change in the the array
 
 //But after using slice it will not modify the array

 const numberClone=number.slice();
numberClone.push(9);
console.log(number);
