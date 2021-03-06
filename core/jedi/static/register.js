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
    fetch(window.location.origin+"/register", {
       
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
  var status=document.getElementsByClassName("status")
  if(json.status){
    status[0].innerHTML=json.error;
  }else{
    status[0].innerHTML=json.message;
  }
}