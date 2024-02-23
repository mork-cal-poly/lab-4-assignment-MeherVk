function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(600, 600);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background(220);

    
  //Calling Whale
  drawWhale(400,250);

}
function drawWhale(Wx,Wy){
  push();
  translate(Wx,Wy);
  
     noStroke();
    fill(176, 199, 240);
    rect(-40, -210, 100, 65);
  
    //Front of body
    fill(176, 199, 240);
    quad(-170, -240, -30, -200-10, -30, -145, -110, -145);
  
    //End of body
    // (3,1,2)
    fill(176, 199, 240);
    triangle(160, -115, 60, -210, 60, -145);
  
    //Tail 
    scale(0.5);
    fill(176, 199, 240);
    triangle(300, -125, 320, -230, 350, -165);
    fill(109, 132, 168);
    triangle(250, -200, 320, -230, 250, -145);
   
    //Foreground Arm 
    //(3,1,2)
    fill(176, 199, 240);
    triangle(50, -200-10, -40, -290, 40, -290);
    triangle(50, -200-10, 40, -270, 110, -195);
  
    //Background Arm
    fill(109, 132, 168);
    triangle(-50, -210, -140, -290, -60, -290);
    triangle(-50, -210, -60, -270, -10, -195);
  
    //Back support 
    //(3,1,2)
    fill(176, 199, 240);
    triangle(-30, -410, -343, -479, 118, -420);
  
    //eye 
    fill(2, 42, 56);
    ellipse(-160, -330, 20, 10);
  
    //face 
    fill(2, 42, 56);
    ellipse(-210, -310, 50, 2);
    
   pop(); 

}