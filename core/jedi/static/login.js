document.getElementById("submit").addEventListener("click", function(event){
  event.preventDefault()
  var username=document.getElementById("username").value
  var password=document.getElementById("password").value
  localStorage.setItem("unaem", username);
  submit(username,password)
});
function submit(username,password){
  // console.log("still yeh")
  cred={
    username:username,
    password:password
  }
  console.log(cred)
  fetch(window.location.origin+"/login", {
     
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
  .then(json=>validateLogin(json));
}
function validateLogin(json){
  if(json.status){
    var status=document.getElementsByClassName("status")
    status[0].innerHTML=json.error;
  }else{
    window.location= window.location.origin+"/feed";
  }
}