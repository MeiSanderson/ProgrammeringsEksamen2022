xPosition = 25;
yPosition = 100;
let a
let v
let v0
let t
let t0

function setup()
{
  createCanvas(400, 400);
  background(94, 68, 130);  
  
  inputFelt0 = createInput();
  inputFelt0.position(xPosition, yPosition);
  inputFelt0.size(50);

  inputFelt1 = createInput()
  inputFelt1.position(xPosition, yPosition + 25 * 1);
  inputFelt1.size(50);

  inputFelt2 = createInput()
  inputFelt2.position(xPosition, yPosition + 25 * 2);
  inputFelt2.size(50);

  inputFelt3 = createInput();
  inputFelt3.position(xPosition, yPosition + 25 * 3);
  inputFelt3.size(50);
  
  inputFelt4 = createInput()
  inputFelt4.position(xPosition, yPosition + 25 * 4);
  inputFelt4.size(50);

  
  button = createButton("Udregn");
  button.position(xPosition, yPosition + 21 * 6);
  button.mousePressed(værdi);

  angleMode(DEGREES);
}

 function draw()
 {
 stroke(0);
 fill(68, 130, 124);
 rect(5, 90, 89, 170);
 fill(0);
 text("a",xPosition - 10, yPosition + 15);
 text("v",xPosition - 10, yPosition + 23 * 2 - 5);
 text("v0",xPosition - 15, yPosition + 23 * 3 - 4);
 text("t",xPosition - 10, yPosition + 23 * 4);
 text("t0",xPosition - 15, yPosition + 23 * 5);

 }

   function værdi()
   {
    a = float(inputFelt0.value());
    v = float(inputFelt1.value());
    v0 = float(inputFelt2.value());
    t = float(inputFelt3.value());
    t0 = float(inputFelt4.value());
    

     
    
     if(isNaN(v))
     {
      stroke(200, 50, 99);
      v = a*(t-t0)+v0
      text(v.toFixed(2), 100, yPosition + 11 * 4 - 4);
     }
     
      if(isNaN(v0))
     {
      stroke(200, 50, 99);
      v0 = v-a*(t-t0)
      text(v0.toFixed(2), 100, yPosition + 17 * 4 - 4);
     }

      if(isNaN(t))
     {
      stroke(200, 50, 99);
      t = ((v-v0)/a)+t0
      text(t.toFixed(2), 100, yPosition + 23 * 4 - 4);
     }
     
      if(isNaN(t0))
     {
      stroke(200, 50, 99);
      t0 = t-(v-v0)/a
      text(t0.toFixed(2), 100, yPosition + 30 * 4 - 4);
     }
     
      if(isNaN(a))
     {
      stroke(200, 50, 99);
      a = (v-v0)/(t-t0)
      text(a.toFixed(2), 100, yPosition + 5 * 4 - 4);
     }
     
  
   }
     
    