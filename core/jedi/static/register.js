document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault()
    var username=document.getElementById("username").value
    var password=document.getElementById("password").value
    submit(username,password)
  });
function submit(username,password){
    // console.log("still yeh")
    cred={
      username:username,
      password:password
    }
    console.log(cred)
    fetch("http://127.0.0.1:5000/register", {
       
      // Adding method type
      method: "POST",
       
      // Adding body or contents to send
      body: JSON.stringify(cred),
       
      // Adding headers to the request
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
  })
   
  // Converting to JSON
    .then(response => response.json())
   
  // Displaying results to console
    .then(json => validateRegister(json))
}
function validateRegister(json){
  if(json.status){
    var status=document.getElementsByClassName("status")
    if(json.error==="user already exists"){
      status[0].innerHTML="Please go and <a href='/login'>Login</a>"
    }else{

    }
  }else{
    status[0].innerHTML="<a href='/login'>Login</a> Now"
  }
}