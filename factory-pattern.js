const homeLoanCal=(period,nInstallement)
return period*nInstallement*9/100;

const carLoanCal=(period,nInstallement)
return period*nInstallement*11.6/100;

//so to overcome the above code in which parameters are common

//viable solution
const calculateLoan=(period,nInstallement,rate)=>
period*nInstallement*rate/100;

//factory method to overcome this problem
const createLoanCalculator=rate=>{
    const calculator=(p,n)=>p*n*rate/100;
    return calculator;
}

    const homeLoanCalculator=createLoanCalculator(7);
    const carLoanCalculator=createLoanCalculator(16);
    const businessLoanCalculator=createLoanCalculator(5);

    let result =homeLoanCalculator(16,4);
    console.log(result);

     result =carLoanCalculator(16,4);
    console.log(result);

     result =businessLoanCalculator(16,4);
    console.log(result);


    //IIFE-IMMEDIATELY INVOKED FUNCTION
    (
        ()=>console.log('hello')
    )();

    (
        (message)=>console.log(message)
    )('hello people');