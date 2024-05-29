function setup() {
    createCanvas(400,400);
    background("yellow");
  }
  
  function draw() {
    stroke("black")
    fill ("blue");
    if(mouseIsPressed){
    rect(mouseX,mouseY,30,30);
  }
  }