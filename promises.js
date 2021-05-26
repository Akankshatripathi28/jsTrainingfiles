//PENDING-some work goin on
//FULLFILLED-resolved
//REJECTED-rejected

//resolves->goes to then block,calls then callback

const promise=new Promise((resolve,reject)=>{
    //math.random return number from 0-1
    const randomNumber=5;
    if(randomNumber>0.5)
    {
        resolve(randomNumber);
    }
    else{
        reject(randomNumber);
    }
}) 
promise.then(randomNumber =>console.log(randomNumber))
       .catch(errorNumber =>console.log(errorNumber));

const customFetch=(url)=>{
    const promise=new Promise((resolve,reject)=>{
    const xhr=new XMLHttpRequest();
//configuring the request
xhr.open("GET",url)  //get
xhr.send(); //sending the request to the server
xhr.onreadystatechange=function (){
    if(this.readyState===4 && this.status===200){
        resolve(this.response);
    }
}
});
return promise;
}
customFetch("https://jsonplaceholder.typicode.com/posts")
.then(response=>response)
.then(data=>console.log(data))
.catch(error=>console.log(error));