
//collection of key value pairs
const recipe={
    name:'paneer',
    type:'veg'
}
const printKey=(object)=>{
    for(let key in object){
        console.log(object[key]);
    }
}
printKey(recipe);

//2
function isAdult(personAge){
    if(personAge>=18)
    {
        console.log('person is adult');

    }
    else{
        console.log('person is not adult');
    }
}
isAdult(18);

const average=numbers=>{
    const length=numbers.length;

    let sum=0;
    for(let number of numbers){
        sum+=number;
    }
    const average = sum/length;
    return average;
}

const getCricketerAverage = cricketer =>average (cricketer.runs);





const cricketer ={
    name:'M S Dhoni',
    runs:[45,65,85,96,41,32,78]
}
const cricketerAverage = getCricketerAverage(cricketer);
console.log(cricketerAverage);




const isLengthGreater =(string,length)=>string.length =length;  //comparison
const person={
    name:'Akanksha',
    age:21
}
const isGreater = isLengthGreater(person.name,10);

if(isGreater){
    console.log('you have long name');
}else{
    console.log('you have short name');
}