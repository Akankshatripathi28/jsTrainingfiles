//difference between let and var
const add=()=>{
    var num1=5;
    let num2=8;
    console.log(num1+num2);
}
add();
//console.log(num1,num2); var and let inside the function are limited to function

if(8>4){
    var num3=20;
    let num4=25;  //scope to the if block
}
//console.log(num3,num4); //this will show error at the let part bcoz let is limited to block

for(var count=0;count<10;count++)
{
    var num6=15;
    let num7=16;   //scope only for the loop
}
//console.log(num6,num7);



//DIFFERENCE NO. 2
//hoisting
console.log(num8);
var num8=100;  //this will print undefined becoz it will hoist above log


//CALLBACK:-FUNCTION THAT ARE CALLED AS THE PARAMETERS TO ANOTHER FUNCTION

const getGreeting=(age,fn)=>{
    const result =fn(age);
    if(result){
        return 'Hello,Welcom on board';
    }
    return 'Hello,you are overboard';

    const isPersonAdult=age=>age>=18;

    const message=getGreeting(21,isPersonAdult);
    console.log(message);


}
//we use callback to reduce redundancy

const numbers=[5,6,7,8,9,10];
const modifyArray=(array,fn)=>{
    for(let elements of array){
        const modifyArray=[];
        const result=fn(elements);
        modifyArray.push(result);
    }
}
const numberPlus11=modifyArray(numbers,e=>e+11);


