console.log("from feed1.js inasdnasidnasd");
let numb = document.getElementById("tweets");
let username_dis=document.getElementsByClassName("user");
username_dis[0].innerHTML="Hello "+localStorage.getItem("unaem")
console.log(numb.children.length);
//Math.floor(Math.random() * 10)
function createTweetUI(username,content,id,hash){
    var content
    // content='<div class="w3-margin-top tweet w3-container w3-border" data-row='+id+'><p class="username w3-xlarge w3-padding" id="">'+username+'</p><p class="tweet-content class w3-xlarge w3-padding" >'+content+'</p><div class="buttons w3-xlarge w3-margin w3-cell-row"><div class="w3-container w3-cell w3-padding-large w3-margin" data-row='+id+'><button class="w3-btn" onclick="bookmark(this);"><i class="fa fa-bookmark"></i> Bookmark</button></div><div class="w3-container w3-cell w3-padding-large w3-margin" data-row='+id+'><button class="w3-btn" onclick="retweet(this)"><i class="fa fa-retweet"></i> Retweet</button></div><div class="w3-container w3-cell w3-padding-large w3-margin" data-hash='+hash+'><button class="w3-btn" onclick=share(this)><i class="fa fa-share"></i> Share</button></div></div></div><div class="w3-hide w3-container Comments w3-border "></div>'
    // if(isRetweet(id) && isBookmark(id)){
    //   content='<div class="w3-margin-top tweet w3-container w3-border" data-row='+id+'><p class="username w3-xlarge w3-padding" id="">'+username+'</p><p class="tweet-content class w3-xlarge w3-padding" >'+content+'</p><div class="buttons w3-xlarge w3-margin w3-cell-row"><div class="w3-container w3-cell w3-padding-large w3-margin" data-row='+id+'><button style="color:lightgreen" class="w3-btn" onclick="bookmark(this);"><i class="fa fa-bookmark"></i> Bookmarked</button></div><div class="w3-container w3-cell w3-padding-large w3-margin" data-row='+id+'><button class="w3-btn" onclick="retweet(this)"><i class="fa fa-retweet"></i> Retweeted</button></div><div class="w3-container w3-cell w3-padding-large w3-margin" data-hash='+hash+'><button class="w3-btn" onclick=share(this)><i class="fa fa-share"></i> Share</button></div></div></div><div class="w3-hide w3-container Comments w3-border "></div>'
    // }
    if(isRetweet(id)){
      content='<div class="w3-margin-top tweet w3-container w3-border" data-row='+id+'><p class="username w3-xlarge w3-padding" id="">'+username+'</p><p class="tweet-content class w3-xlarge w3-padding" >'+content+'</p><div class="buttons w3-xlarge w3-margin w3-cell-row"><div class="w3-container w3-cell w3-padding-large w3-margin" data-row='+id+'><button class="w3-btn" onclick="bookmark(this);"><i class="fa fa-bookmark"></i> Bookmark</button></div><div class="w3-container w3-cell w3-padding-large w3-margin" data-row='+id+'><button style="color:lightgreen"class="w3-btn" onclick="retweet(this)"><i class="fa fa-retweet"></i> Retweeted</button></div><div class="w3-container w3-cell w3-padding-large w3-margin" data-hash='+hash+'><button class="w3-btn" onclick=share(this)><i class="fa fa-share"></i> Share</button></div></div></div><div class="w3-hide w3-container Comments w3-border "></div>'
    }else if(isBookmark(id)){
      content='<div class="w3-margin-top tweet w3-container w3-border" data-row='+id+'><p class="username w3-xlarge w3-padding" id="">'+username+'</p><p class="tweet-content class w3-xlarge w3-padding" >'+content+'</p><div class="buttons w3-xlarge w3-margin w3-cell-row"><div class="w3-container w3-cell w3-padding-large w3-margin" data-row='+id+'><button style="color:lightgreen" class="w3-btn" onclick="bookmark(this);"><i class="fa fa-bookmark"></i> Bookmarked</button></div><div class="w3-container w3-cell w3-padding-large w3-margin" data-row='+id+'><button class="w3-btn" onclick="retweet(this)"><i class="fa fa-retweet"></i> Retweet</button></div><div class="w3-container w3-cell w3-padding-large w3-margin" data-hash='+hash+'><button class="w3-btn" onclick=share(this)><i class="fa fa-share"></i> Share</button></div></div></div><div class="w3-hide w3-container Comments w3-border "></div>'
    }else if(isRetweet(id) && isBookmark(id)){
      content='<div class="w3-margin-top tweet w3-container w3-border" data-row='+id+'><p class="username w3-xlarge w3-padding" id="">'+username+'</p><p class="tweet-content class w3-xlarge w3-padding" >'+content+'</p><div class="buttons w3-xlarge w3-margin w3-cell-row"><div class="w3-container w3-cell w3-padding-large w3-margin" data-row='+id+'><button style="color:lighthgreen" class="w3-btn" onclick="bookmark(this);"><i class="fa fa-bookmark"></i> Bookmarked</button></div><div class="w3-container w3-cell w3-padding-large w3-margin" data-row='+id+'><button style="color:lightgreen"class="w3-btn" onclick="retweet(this)"><i class="fa fa-retweet"></i> Retweeted</button></div><div class="w3-container w3-cell w3-padding-large w3-margin" data-hash='+hash+'><button class="w3-btn" onclick=share(this)><i class="fa fa-share"></i> Share</button></div></div></div><div class="w3-hide w3-container Comments w3-border "></div>'
    }else{
      content='<div class="w3-margin-top tweet w3-container w3-border" data-row='+id+'><p class="username w3-xlarge w3-padding" id="">'+username+'</p><p class="tweet-content class w3-xlarge w3-padding" >'+content+'</p><div class="buttons w3-xlarge w3-margin w3-cell-row"><div class="w3-container w3-cell w3-padding-large w3-margin" data-row='+id+'><button class="w3-btn" onclick="bookmark(this);"><i class="fa fa-bookmark"></i> Bookmark</button></div><div class="w3-container w3-cell w3-padding-large w3-margin" data-row='+id+'><button class="w3-btn" onclick="retweet(this)"><i class="fa fa-retweet"></i> Retweet</button></div><div class="w3-container w3-cell w3-padding-large w3-margin" data-hash='+hash+'><button class="w3-btn" onclick=share(this)><i class="fa fa-share"></i> Share</button></div></div></div><div class="w3-hide w3-container Comments w3-border "></div>'
    }

    
    // if(isRetweet(id) && isBookmark(id)){

    // }
    console.log("Creating new div");
    const div = document.createElement("div");
    // div.setAttribute("class","w3-");
    
    div.innerHTML=content;
    if(numb.children.length==0){
        numb.appendChild(div);
    }else{
        numb.insertBefore(div,numb.children[0]);
    }
}
function createReTweetUI(id,username1,username2,content,hash){
  const div = document.createElement("div");
  // div.setAttribute("class","w3-");
  var content='<div class="w3-margin-top tweet w3-container w3-border" data-row='+id+'><p class="username w3-xlarge w3-padding" id="">'+username1+' retweets</p><p class="username w3-large w3-padding" id="">'+username2+'</p><p class="tweet-content class w3-large w3-padding" >'+content+'</p><div class="buttons w3-xlarge w3-margin w3-cell-row"><div class="w3-container w3-cell w3-padding-large w3-margin" data-row='+id+'><button class="w3-btn" onclick="bookmark(this);"><i class="fa fa-bookmark"></i> Bookmark</button></div><div class="w3-container w3-cell w3-padding-large w3-margin" data-row='+id+'><button class="w3-btn" onclick="retweet(this)"><i class="fa fa-retweet"></i> Retweet</button></div><div class="w3-container w3-cell w3-padding-large w3-margin " data-hash='+hash+'><button class="w3-btn" onclick="share(this)"><i class="fa fa-share"></i> Share</button></div></div></div><div class="w3-hide w3-container Comments w3-border "></div>'
  if(username1==username_dis){
    console.log('asdns')
    var content='<div class="w3-margin-top tweet w3-container w3-border" data-row='+id+'><p class="username w3-xlarge w3-padding" id="">'+username1+' retweets</p><p class="username w3-large w3-padding" id="">'+username2+'</p><p class="tweet-content class w3-large w3-padding" >'+content+'</p><div class="buttons w3-xlarge w3-margin w3-cell-row"><div class="w3-container w3-cell w3-padding-large w3-margin" data-row='+id+'><button class="w3-btn" onclick="bookmark(this);"><i class="fa fa-bookmark"></i> Bookmark</button></div><div class="w3-container w3-cell w3-padding-large w3-margin" data-row='+id+'><button class="w3-btn w3-disabled " style="color:lightgreen" onclick="retweet(this)"><i class="fa fa-retweet"></i> Retweeted</button></div><div class="w3-container w3-cell w3-padding-large w3-margin"><button class="w3-btn"><i class="fa fa-share"></i> Share</button></div></div></div><div class="w3-hide w3-container Comments w3-border "></div>'
  }
  div.innerHTML=content;
  if(numb.children.length==0){
      numb.appendChild(div);
  }else{
      numb.insertBefore(div,numb.children[0]);
  }
}
function asktheServer(){  
  fetch(window.location.origin+"/bookmarkedposts",{
    method: "POST",
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response=>response.json())
  .then(json=>putBookmarksinLS(json))


  fetch(window.location.origin+"/allposts",{
  method: "POST",
  // Adding headers to the request
  headers: {
      "Content-type": "application/json; charset=UTF-8"
  }
}).then(response=>response.json())
.then(json=>drawtheTweetUI(json))

fetch(window.location.origin+"/allboostedposts",{
  method: "POST",
  // Adding headers to the request
  headers: {
      "Content-type": "application/json; charset=UTF-8"
  }
}).then(response=>response.json())
.then(json=>drawtheReTweetUI(json))

fetch(window.location.origin+"/boostedposts",{
  method: "POST",
  // Adding headers to the request
  headers: {
      "Content-type": "application/json; charset=UTF-8"
  }
}).then(response=>response.json())
.then(json=>putRetweetsinLS(json))
}
function drawtheReTweetUI(json){
  console.log(json)
  for(let i=0;i<json.length;i++){
    createReTweetUI(json[i].boostpost_id,json[i].boosteduser_username,json[i].og_post_username,json[i].og_post_content,json[i].og_content_hash);
  }
}
function drawtheTweetUI(json){
  for(let i=0;i<json.length;i++){
    createTweetUI(json[i].username,json[i].content,json[i].id,json[i].content_hash);
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
  boostThePost(element)
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
    bookmarkThePost(element)
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
function boostThePost(element){
  var og_post_id={
    og_post_id:parseInt(element.parentNode.getAttribute('data-row'))
  }
  fetch(window.location.origin+"/boostpost", {
     
    // Adding method type
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify(og_post_id),
     
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
 
// Converting to JSON
  .then(response => response.json())
 
// Displaying results to console
  .then(json=>element(json,element));
}
function share(element){
  var content_hash=element.parentNode.getAttribute("data-hash")
  var url_share="https://ipfs.io/ipfs/"+content_hash
  console.log(url_share)
  if(navigator.clipboard.writeText(url_share)){
    var share_status=document.getElementById("copiedstatus")
    share_status.style.display="block";
    share_status.innerText="Copied to Clipboard"
  }
}
function bookmarkThePost(element){
  var post_id=parseInt(element.parentNode.getAttribute('data-row'))
  var post_json={
    post_id:post_id
  }
  fetch(window.location.origin+"/bookmarkpost", {
     
    // Adding method type
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify(post_json),
     
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
 
// Converting to JSON
  .then(response => response.json())
 
// Displaying results to console
  .then(json=>console.log(json));
}


function putRetweetsinLS(json){
  localStorage.setItem("Retweet",JSON.stringify(json))
}
function isRetweet(id){
  var flag=false
  var retweets_info=JSON.parse(localStorage.getItem("Retweet"))
  // console.log(retweets_info)
  for(let i=0;i<retweets_info.length;i++){
    if(retweets_info[i].og_post_id==id){
      flag= true
    }
  }
  return flag;
}
function putBookmarksinLS(json){
  localStorage.setItem("Bookmark",JSON.stringify(json))
}
function isBookmark(id){
  var flag=false
  var bookamrks_info=JSON.parse(localStorage.getItem("Bookmark"))
  // console.log(retweets_info)
  for(let j=0;j<bookamrks_info.length;j++){
    if(bookamrks_info[j].post_id==id){
      flag= true
    }
  }
  return flag;
}