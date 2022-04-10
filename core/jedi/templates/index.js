var stars=[]
let image
let login,feed,register;
let speed,fade=0;
function setup(){
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i <500; i++) {
    stars[i] = new Star();
  }
  login=createA("/login","Login");
  register=createA("/register","Register");
  feed=createA("/feed","My Feed");
  login.style("color","white")
  login.style('font-size', '35px');
  register.style("color","white")
  register.style('font-size', '35px');
  feed.style("color","white")
  feed.style('font-size', '35px');
}
function draw() {
  speed = 100;
  background(0,0,50);
  translate(width / 2, height / 2);
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
  fill(255,255,255, fade)
  textSize(150)
  textAlign(CENTER, CENTER);
  text("Jedi",0,-100)
  textSize(75)
  text("Join us, be truly you",0,25);
  kill_the_star()
  if(fade==255){
    login.position(windowWidth/2-300, windowHeight/2+100)
    register.position(windowWidth/2-50, windowHeight/2+100)
    feed.position(windowWidth/2+200,windowHeight/2+100)
  }
}
function windowResized() {
  console.log("resizing now??")
  resizeCanvas(windowWidth, windowHeight);
}
function kill_the_star(){
  stars.pop()
  if(stars.length/2==0){if(fade!=255){fade++;}}
}
function build_the_page(){
  console.log('letsgo')
}