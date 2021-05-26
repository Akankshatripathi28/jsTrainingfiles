const device={
    name:'oneplusez1',
    brand:'onplus',
    dataRelease:'2021-02-04',
    Ram:'8GB',
    memory:'128gb'

}
const {brand, ...deviceExceptBrand}=device;
console.log(deviceExceptBrand);//print the deviceExceptBrand constant in which the value without brand is present
 

//SPREAD-CLONE OF THE ORIGINAL OBJECT
const deviceClone={...device};
 console.log(deviceClone);

 //LOOPS-USE TO REPEAT A PARTICULAR TASK
 //1st traditional for loop
 for(let count=0;count<10;count++){
     console.log(count);
 }

 const noOfGoals=[1,2,3,4,5,6,7];
 let length=noOfGoals.length;
 for(let index=0;index<length;index++)
 {
     let element=noOfGoals[index];
     console.log(element);
 }

 //2nd FOR IN LOOP 
 const stockPrices=[275,564,895,456,784,456,521];

 for(let index in stockPrices){
     console.log(stockPrices[index]);
 }
 console.log(stockPrices[3]);


 const stock={
     name:'NSE50',
     closeingPrice:331,
     currentMomentum:'120%',
     customer:[{
         name:'A',
         surname:'B'},{name:'C',surname:'D'}]
 }
  
 for(let key in stock){
     console.log(stock[key]);
     
 }
 for(let index in stock.customer ){
    console.log(stock.customer[index]);
}
const akanksha=1;
//3rd FOR OF LOOP 
const stocks=[{symbol:'nse50',closingPrice:235},{symbol:'HIN',closingPrice:564},
{symbol:'reliance',closingPrice:856}];
for(let stock of stocks){
    console.log( `the stock: ${stock.symbol} ${stock.closingPrice}`);//template string
}

//WHILE LOOP

const rainInMM=[40,50,85,71];
let index=0;
const lengthh=rainInMM.length;
while(index<lengthh){
    const rainValue=rainInMM[index];
    console.log(rainValue);
    index++;
}