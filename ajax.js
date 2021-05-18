//http
//get-fetch data,file
//post-create some data
//put-replace the entire record
//patch-update a few feilds of record
//delete - delete a record


//old js method
const xhr=new XMLHttpRequest();
//configuring the request
xhr.open("GET","https://jsonplaceholder.typicode.com/posts")  //get
xhr.send(); //sending the request to the server
xhr.onreadystatechange=function (){
    if(this.readyState===4 && this.status===200){
        console.log(this.response);
    }
}

//modern way to extract data 
//fetch
fetch("https://jsonplaceholder.typicode.com/posts")  //open,send request
      .then(response =>{
          //convert data into actual data from stringified version
        return response.json();
    })
    .then(data =>{
        console.log(data);
    })
      .catch(err =>{
          console.log(err);
      });