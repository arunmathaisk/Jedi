console.log("from feed1.js inasdnasidnasd");
let numb = document.getElementById("tweets");
console.log(numb.children.length);
//Math.floor(Math.random() * 10)
function createTweetUI(){
    console.log("Creating new div");
    const div = document.createElement("div");
    // div.setAttribute("class","w3-");
    var content='<div class="w3-margin-top tweet w3-container w3-border"><p class="username w3-xlarge w3-padding" id="">Username '+Math.floor(Math.random() * 10)+'1</p><p class="tweet-content class w3-xlarge w3-padding" >fiasndiasndiasndin</p><div class="buttons w3-xlarge w3-margin w3-cell-row"><div class="w3-container w3-cell w3-padding-large w3-margin"><button class="w3-btn" onclick="loadComments();"><i class="fa fa-bookmark"></i> Bookmark</button></div><div class="w3-container w3-cell w3-padding-large w3-margin"><button class="w3-btn" onclick="retweet(this)"><i class="fa fa-retweet"></i> Retweet</button></div><div class="w3-container w3-cell w3-padding-large w3-margin"><button class="w3-btn"><i class="fa fa-share"></i> Share</button></div></div></div><div class="w3-hide w3-container Comments w3-border "></div>'
    div.innerHTML=content;
    if(numb.children.length==0){
        numb.appendChild(div);
    }else{
        numb.insertBefore(div,numb.children[0]);
    }
}
// window.onload=setInterval(createTweetUI,2000);
function genPostUI(){
    var x = document.getElementById("Post");
    console.log(x)
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
document.getElementById('pcontent').onkeyup = function () {
    console.log("asjdnasdn")
    document.getElementById('count').innerHTML = "Characters left: " + (300 - this.value.length);
    if(this.value.length==300){
        document.getElementById('pcontent').setAttribute("disabled","disabled");
        document.getElementById('count').innerHTML = "Max Limit Reached";
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
