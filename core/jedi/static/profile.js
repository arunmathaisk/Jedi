let username_dis=document.getElementsByClassName("user");
username_dis[0].innerHTML="Hello "+localStorage.getItem("unaem")
let numb = document.getElementById("tweets");
let mytweets=document.getElementById("mytweets")
let retweet_button=document.getElementById("retweets")
let bookmark_button=document.getElementById("bookmarks")
window.onload=loadTweetsforProf(1)
function changePage(choice){
    switch(choice) {
        case 1:
        mytweets.style.textDecoration="underline"
        bookmark_button.style.textDecoration="none"
        retweet_button.style.textDecoration="none"
        console.log(mytweets)
        numb.innerHTML=""
        loadTweetsforProf(1)
        break;
        case 2:
        mytweets.style.textDecoration="none"
        bookmark_button.style.textDecoration="none"
        retweet_button.style.textDecoration="underline"
        console.log(retweet_button)
        console.log(numb.children)
        numb.innerHTML=""
        loadTweetsforProf(2)
        // numb.innerHTML="<p class='w3-center w3-large'>No Retweets Yet</p>"
        break;
        case 3:
        mytweets.style.textDecoration="none"
        bookmark_button.style.textDecoration="underline"
        retweet_button.style.textDecoration="none"
        console.log(bookmark_button)
        console.log(numb.children)
        numb.innerHTML=""
        loadTweetsforProf(3)
        // numb.innerHTML="<p class='w3-center w3-large'>No Tweets Bookmarked</p>"
        break;
      }
}

function loadTweetsforProf(choice){
    let url=window.location.origin;
    switch(choice){
        case 1:
            url=url+"/createdposts"
            console.log(url)
            break;
        case 2:
            url=url+"/boostedposts"
            break;
        case 3:
            url=url+"/bookmarkedposts"
            break;
    }
    fetch(url,{
        method:"POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(res=>res.json())
    .then(json => handleData(json,choice));
}
function handleData(json,choice){
    // console.log(json.length)
    if(json.length!=0){
        if(choice==1){
            for(let i=0;i<json.length;i++){
                createTweetUI(json[i].content,choice,"")
            }
        }else if(choice==2){
            for(let i=0;i<json.length;i++){
                createTweetUI(json[i].og_post_content,choice,json[i].og_post_username)
            }
        }else if(choice==3){
            for(let i=0;i<json.length;i++){
                createTweetUI(json[i].post_content,choice,json[i].post_username)
            }
        }

    }else{
        if(choice===1){
            numb.innerHTML="<p class='w3-center w3-large'>Nothing Posted yet</p>"
        }else if(choice===2){
            numb.innerHTML="<p class='w3-center w3-large'>Nothing Retweeted yet</p>"
        }else if(choice ==3){
            numb.innerHTML="<p class='w3-center w3-large'>No Tweets Bookmarked</p>"
        }
    }

}
function createTweetUI(content,choice,username){
    console.log("Creating new div");
    const div = document.createElement("div");
    // div.setAttribute("class","w3-");
    
    if(choice==1){
        var content='<div class="w3-margin-top tweet w3-container w3-border"><p class="tweet-content class w3-xlarge w3-padding" >'+content+'</p><div class="buttons w3-xlarge w3-margin w3-cell-row"><div class="w3-container w3-cell w3-padding-large w3-margin"><button class="w3-btn" onclick="share(this)"><i class="fa fa-share"></i> Share</button></div></div></div><div class="w3-hide w3-container Comments w3-border "></div>'
    }else if(choice==2){
        var content='<div class="w3-margin-top tweet w3-container w3-border"><p class="username w3-xlarge w3-padding" id="">'+username+'</p><p class="tweet-content class w3-xlarge w3-padding" >'+content+'</p><div class="buttons w3-xlarge w3-margin w3-cell-row"><div class="w3-container w3-cell w3-padding-large w3-margin"><button onclick="share(this)" class="w3-btn"><i class="fa fa-share"></i> Share</button></div></div></div><div class="w3-hide w3-container Comments w3-border "></div>'
    }else if(choice ==3){
        var content='<div class="w3-margin-top tweet w3-container w3-border"><p class="username w3-xlarge w3-padding" id="">'+username+'</p><p class="tweet-content class w3-xlarge w3-padding" >'+content+'</p><div class="buttons w3-xlarge w3-margin w3-cell-row"><div class="w3-container w3-cell w3-padding-large w3-margin"><button onclick="share(this)" class="w3-btn"><i class="fa fa-share"></i> Share</button></div></div></div><div class="w3-hide w3-container Comments w3-border "></div>'
    }
    div.innerHTML=content;
    if(numb.children.length==0){
        numb.appendChild(div);
    }else{
        numb.insertBefore(div,numb.children[0]);
    }
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