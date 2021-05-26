//TERNARY OPERATOR

//BASIC CODE
/*let message='';

if(age>65){
    message='get vaccinated';
   }
else{
        message='you will get vaccinated soon!!';
    }*/


    //to wrap this n number of line in small code we use ternary operator
    const age=50;
    const message=age>65 ?
    'get vaccinated'
    :'you will get vaccinated soon!!';
    console.log(message);