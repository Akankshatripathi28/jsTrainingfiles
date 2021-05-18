//to use the keyword await
//its needed to be inside a fn marked async
const getData= async ()=>{
    try{

        const response=await fetch("https://jsonplaceholder.typicode.com/posts")
        const data= await response.json();
        console.log(data);
    }catch(e){
        throw e;
    }
}

getData();
console.log('after getdata');