console.log("from feed1.js inasdnasidnasd");
let numb = document.getElementById("tweets");
let username_dis=document.getElementsByClassName("user");
username_dis[0].innerHTML="Hello "+localStorage.getItem("unaem")
console.log(numb.children.length);
//Math.floor(Math.random() * 10)
function createTweetUI(username,content){
    console.log("Creating new div");
    const div = document.createElement("div");
    // div.setAttribute("class","w3-");
    var content='<div class="w3-margin-top tweet w3-container w3-border"><p class="username w3-xlarge w3-padding" id="">'+username+'</p><p class="tweet-content class w3-xlarge w3-padding" >'+content+'</p><div class="buttons w3-xlarge w3-margin w3-cell-row"><div class="w3-container w3-cell w3-padding-large w3-margin"><button class="w3-btn" onclick="bookmark(this);"><i class="fa fa-bookmark"></i> Bookmark</button></div><div class="w3-container w3-cell w3-padding-large w3-margin"><button class="w3-btn" onclick="retweet(this)"><i class="fa fa-retweet"></i> Retweet</button></div><div class="w3-container w3-cell w3-padding-large w3-margin"><button class="w3-btn"><i class="fa fa-share"></i> Share</button></div></div></div><div class="w3-hide w3-container Comments w3-border "></div>'
    div.innerHTML=content;
    if(numb.children.length==0){
        numb.appendChild(div);
    }else{
        numb.insertBefore(div,numb.children[0]);
    }
}
function asktheServer(){
  fetch(window.location.origin+"/allposts",{
  method: "POST",
  // Adding headers to the request
  headers: {
      "Content-type": "application/json; charset=UTF-8"
  }
}).then(response=>response.json())
.then(json=>drawtheTweetUI(json))
}
function drawtheTweetUI(json){
  for(let i=0;i<json.length;i++){
    createTweetUI(json[i].username,json[i].content);
  }
}
asktheServer()
// window.onload=setInterval(asktheServer,2000);
function genPostUI(){
    var x = document.getElementById("Post");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
      var no_of_comments=5;
    //   for (let i = 0; i<no_of_comments; i++) { 
    //         const div = document.createElement("div");
    //         var content='<div class="w3-container w3-large"><span>Username'+Math.floor(Math.random() * 10)+'</span><span>&nbspGreat Thought!!!</span></div>';
    //         div.innerHTML=content;
    //         x.appendChild(div);
    // }
    }else {
      x.className = x.className.replace(" w3-show", "");
    }
}
// no of char detector 
let new_tweet_content=document.getElementById('pcontent');
new_tweet_content.onkeyup = function () {
  if(document.getElementById('pcontent').value.length==100){
    // document.getElementById('count').innerHTML = "Characters left: " + (300 - this.value.length);
      document.getElementById('pcontent').setAttribute("disabled","disabled");
      document.getElementById('count').innerHTML = "Max Limit Reached";
  }else {
      document.getElementById('count').innerHTML = "Characters left: " + (100 - this.value.length);
  }

  };
function retweet(element){
  if(element.innerHTML.includes("Retweeted")){
    element.style.color="white"
    element.innerHTML="<i class='fa fa-retweet'></i> Retweet"
  }else{
  element.style.color="lightgreen"
  element.innerHTML="<i class='fa fa-retweet'></i> Retweeted"
  }
}
function bookmark(element){
  console.log(element)
  if(element.innerHTML.includes("Bookmarked")){
    element.style.color="white"
    element.innerHTML="<i class='fa fa-bookmark'></i> Bookmark"
  }else{
  element.style.color="lightgreen"
  element.innerHTML="<i class='fa fa-bookmark'></i> Bookmarked"
  }
}
function postTheTweet(){
  content={
    content:new_tweet_content.value
  }
  console.log(content)
  let url=window.location.origin+"/createpost"
  fetch(url, {
     
    // Adding method type
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify(content),
     
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
 
// Converting to JSON
  .then(response => response.json())
 
// Displaying results to console
  .then(json=>validatePost(json));

}
function validatePost(){
  new_tweet_content.value=""
  genPostUI()
}
