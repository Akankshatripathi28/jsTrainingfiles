//PENDING-some work goin on
//FULLFILLED-resolved
//REJECTED-rejected

//resolves->goes to then block,calls then callback
function getRandom(num){
return new Promise((resolve,reject)=>{
    resolve({
        num:num
    })
    //math.random return number from 0-1
})
    if(num>5)
    {
        throw error('invalid ');
    }
    

}
getRandom(8)
       .then(num =>console.log(num))
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