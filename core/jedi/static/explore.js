let usernames=[]
function preload(){
	fetch(window.location.origin+"/explore",{
		method: "POST",
		// Adding headers to the request
		headers: {
			"Content-type": "application/json; charset=UTF-8"
		}
	  }).then(response=>response.json())
	  .then(json=>putInTheArray(json))
}
function putInTheArray(json){
	for(let i=0;i<json.length;i++){
		usernames[i]=json[i].username
	}
}
let yoff = 0.0; // 2nd dimension of perlin noise

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
background(0,0,50);
frameRate(3)
fill(255)
textSize(25)
textAlign(CENTER,CENTER)
for(let i=0;i<usernames.length;i++){
    let x=random(0,windowWidth)
    let y=random(0,windowHeight)
    noFill()
    stroke(random(0,255),random(0,255),random(0,255))
    ellipse(x,y,usernames[i].length*25);
    fill(255)
    textSize(25)
    textAlign(CENTER,CENTER)
    text(usernames[i],x,y)
}
}


 