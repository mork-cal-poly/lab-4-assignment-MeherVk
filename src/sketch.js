
var a = 0;
let Wx = 0;
let bC = 100;

let byeLady = false; 
let LoseBackground = false;
let yayFish = true; 


function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(600, 600);
  myCanvas.parent("canvas-parent");


}

function draw() {
  background(bC);
    
  //Calling Abstract Background Squares that appears in the 1st part of the animation 
  if(LoseBackground==false)
  drawBackground(200,400);
   
  fill(0,0,205, 90);
  rect(0, 0, 800, 800);
  
  //Calling Lady
  if (byeLady==false)
  drawEntity(-40,30, 1.2);
  
  drawSeaotter(265,375,.02);

  //Calling Whale
  drawWhale(400,250);

  //calling fish
  if(yayFish==false) 
  drawFishy(400,250);

  //Making Background change color, fish appear & Lady + abstract squares disappear
  if (a < -PI/2){
    bC = '#1247A8';
    byeLady = true; 
    LoseBackground = true;
    yayFish = false
  }
  
}

//-------------------------------------

 //The abstract background shapes
function drawBackground(x, y) {
  push();
    translate(x, y);
    noStroke();
    fill(94,242,205, 200)
    rect(-90, -200, 405, 205);
   
    fill(175, 239,245, 100)
    rect(60, -300, 205, 405);
   
 pop();
 }

//-------------------------------------

//The whale creature 
function drawWhale(Wx,Wy){
  push();
  translate(Wx,Wy);

  rotate(a);
  
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
    
    a = a - 0.01
    
   pop(); 

}

//----------------------------------

//The Lady 
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

  function drawSeaotter(x,y,sc) {
    push();
    translate(x,y);
    scale(sc)

    
    fill(115,94,89)
    //hind
    ellipse(15,90,225,135); //leg 2
    ellipse(125,100,75,150); //foot 2
    ellipse(175,200,300,150); //tail
    
    //body
    fill(174,162,152)
    ellipse(-90,160,425,250); //body 2
    ellipse(-200,70,250,425); //body 1
    
    //limbs
    fill(115,94,89)
    ellipse(-275,25,70,140); //bicept 1
    push();
      translate(-45,200)
      rotate(PI/4);
      ellipse(-245,35,50,100); //forearm 1
    pop();
    ellipse(-125,25,70,140); //bicept 2
    push();
      translate(-220,200)
      rotate(3*PI/4);
      ellipse(-150,55,50,100); //forearm 2
    pop();
    ellipse(-225,200,150); //upper leg 1
    ellipse(-125,225,250,150); //leg 1
    ellipse(-15,200,75,160); //foot 1
   
    //head
    ellipse(-290,-250,70); //left ear
    ellipse(-110,-250,70); //right ear
    fill(174,162,152)
    ellipse(-200,-175,250); //head
    fill(255)
    ellipse(-250,-200,50); //left eye
    ellipse(-150,-200,50); //right eye
    fill(0)
    ellipse(-245,-205,30); //left eye pupil
    ellipse(-145,-205,30); //right eye pupil
    line(-200,-140,-235,-105) //left whisker
    line(-200,-140,-165,-105) //right whisker
    fill(209,73,91)
    arc(-200,-140,100,65,PI/4,3*PI/4) //mouth
    fill(115,94,89)
    ellipse(-200,-150,50,25); //nose
    
    pop();
  }

  //-------------------------------------
  //The Fish 

    function drawFishy(fX,fY) {
      push();
            fill(232, 151, 168);
            noStroke();
            translate(fX,fY);
            ellipse(56, 46, 105, 35);
            //3,1,2
            //face
            triangle(91, 60, 91, 32, 119, 45);
            //Top Tail
            triangle(-25, 45, -33, 10, 9, 45);
            //Bottom Tail 
            triangle(-28,80, -25, 57, 9, 45);
            //Fin
             triangle(30,80, 43, 57, 77, 45);
            
            fill(255);
            circle(90,45, 20);
            
            fill(0);
            circle(90,45, 5);
      pop();
      
      }
   
  