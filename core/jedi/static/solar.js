let w = 800;
let h = 800;


let sunSpotX=0;
let sunSpotY=0;
let sunSpotTheta = 0;



let planetsX=[0,0,0,0,0,0,0,0];
let planetsY=[0,0,0,0,0,0,0,0];
let planetsSize=[0,0,0,0,0,0,0,0];
let planetsSpeed = [0,0,0,0,0,0,0,0];
let planetsxR =  [0,0,0,0,0,0,0,0];
let planetsyR =  [0,0,0,0,0,0,0,0];
let planetsTheta = [0,0,0,0,0,0,0,0];
let usernames=[]
let actualSizes = [1516,3760,3959,2106,43441,36184,15759,15299];
let planetColours =['red','brown','blue','red','orange','green','blue','brown'];


let starsX=[];
let starsY=[];
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
		planetsSize[i]=parseInt(json[i].length)
		usernames[i]=json[i]
	}
}
function setup() {
  background(255);
  createCanvas(displayWidth, displayHeight);
  w = displayWidth;
  h = displayHeight;
  sunSpotTheta=50+random(310);
  angleMode(DEGREES);
  frameRate(25);

  for(let i=0;i<8;i++){
  	planetsxR[i] = 10+actualSizes[i]*0.010;
  	planetsyR[i] = 10+actualSizes[i]*0.010;
  	planetsSize[i] = planetsSize[i]*actualSizes[i]*0.0010;
  	planetsTheta[i] = random(360);
  	planetsSpeed[i] = 1 / ((i +1));
  }

  for(let i=0;i<500;i++){
  	starsX.push(random(displayWidth));
  	starsY.push(random(displayHeight));

  }

}

function draw() {
  background(0,0,50);
  fill(255);
  for(let i=0;i<500;i++){
  	stroke(255, 240+random(15), 240+random(15));
  	point(starsX[i],starsY[i]);
  }
  noStroke();
  drawSun();
  drawPlanets();
}

function drawStars(){

}

function drawSun(){
	let sW = w * .10;
	let sH = h * .12;
	fill('yellow');
	stroke(255, 204, 0);
 	ellipse(displayWidth/2,displayHeight/2,sW,sW);
 	noFill();
	noStroke();

 	if(sunSpotTheta > 0 && sunSpotTheta<180){
	 	fill('black');
	    sunSpotX=displayWidth/2 + (sW/2 * cos(sunSpotTheta));
	    sunSpotY=displayHeight/2 + (sH/2 * sin(sunSpotTheta));
	 	circle(sunSpotX, sunSpotY, 4);
	 	noFill();
 	}


	sunSpotTheta=sunSpotTheta+random(3);
 	if(sunSpotTheta > 360){
 		sunSpotTheta = 0;
 	}
}


 

function drawPlanets(){
  let sW = w * .10;
  let sH = h * .12;

  for(let i=0;i<8;i++){

	    planetsX[i]=displayWidth/2 + (sW+planetsxR[i]) * cos(planetsTheta[i]);
	    planetsY[i]=displayHeight/2 + (sH+planetsyR[i]) * sin(planetsTheta[i]);
		fill(planetColours[i]);
	 	ellipse(planetsX[i],planetsY[i],planetsSize[i],planetsSize[i]);
	 	noFill();


	 	planetsTheta[i]=planetsTheta[i]+planetsSpeed[i];
	 	if(planetsTheta[i] > 360){
	 		planetsTheta[i] = 0;
	 	}


   }
}