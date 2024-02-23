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
  
  //Calling Lady
  drawEntity(-40,30, 1.2);
  
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

//----------------------------------

function drawEntity(x,y,s){
  push();
    scale(s);
    translate(x,y);
    noStroke(); 
    
    
    //BackHair 
    push();
    fill(56,32, 17);
    ellipse(280, 120, 100, 80);
    pop();
  
    
  //LeftHair
    push();
    fill(52, 32, 21);
    rotate(-PI/4)
    ellipse(70, 265, 100, 80);
    pop();
     
  
  //RightHair
    push()
    noStroke();
    fill(76, 48, 31);
    rotate(-0.5)
    ellipse(180, 260, 80, 100);
    pop();
    
  //Sleeves 
    fill(161, 181, 178);
    rect(150, 390, 40, 80)
    
    rect(340, 390, 40, 80)
    
  
  //Arm Puffs 
    fill(118, 147, 141);
    circle(180, 360, 100)
    
    circle(350, 360, 100)
  
  //Chest
    fill(118, 147, 141);
    rect(190, 318, 150, 153);
    
  //Neck
    fill(161, 181, 178);
    rect(225, 250, 75, 85);
  
  
  //Neck Frills 
    fill(225, 209, 204)
    triangle(180, 280, 228, 250, 246, 280);
    triangle(220, 320, 228, 250, 260, 280);
    triangle(300, 320, 228, 250, 290, 250);
    triangle(350, 300, 238, 260, 290, 230);
    triangle(350, 250, 258, 260, 290, 230);
    
  
  //Main Face 
   fill(144,101,75);
    noStroke();
    ellipse(250, 200, 100, 150);
    
  // //Ear
  //   translate (width/2, height/2);
  //   rotate(0.2)
  //   ellipse(35, -112, 25, 40)
  
    //eyes
    fill(170, 217, 202);
    circle(275, 200, 10);
    circle(220, 200, 10);
    
    //eyebrows
    fill(52, 32, 21);
    rect(210, 180, 30, 5);
    rect(260, 180, 30, 5);
    
    //nose 
    rect(245, 210, 3, 25);
    
    //mouth 
    fill(171, 68, 70);
    rect(157+80, 253, 25, 7)
    
    fill(145, 63, 70);
    rect(153+80, 248, 30, 8)
  
  pop();
  }