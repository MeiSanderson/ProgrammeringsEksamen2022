xPosition = 25;
yPosition = 100;
let v
let a
let t
let v0

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
  

  button = createButton("Udregn");
  button.position(xPosition, yPosition + 17 * 6);
  button.mousePressed(værdi);

  angleMode(DEGREES);
}

 function draw()
 {
 stroke(0);
 fill(68, 130, 124);
 rect(5, 90, 89, 170);
 fill(0);
 text("v",xPosition - 10, yPosition + 15);
 text("a",xPosition - 10, yPosition + 23 * 2 - 5);
 text("t",xPosition - 10, yPosition + 23 * 3 - 4);
 text("v0",xPosition - 15, yPosition + 23 * 4);
 

 }

   function værdi()
   {
    this.v = float(inputFelt0.value());
    this.a = float(inputFelt1.value());
    this.t = float(inputFelt2.value());
    this.v0 = float(inputFelt3.value());
    
    

     
    
     if(isNaN(this.v))
     {
      stroke(0);
      this.v = this.a*this.t+this.v0
      text(this.v.toFixed(2)+" m/s", 100, yPosition + 5 * 4 - 4);
      text("v = a * t + v0", 130,80)
     }
     
      if(isNaN(this.a))
     {
      stroke(0);
      this.a = (this.v-this.v0)/this.t
      text(this.a.toFixed(2)+" m/s^2", 100, yPosition + 10 * 4 - 4);
      text("a = (v-v0)/t", 130,80)
     }

      if(isNaN(this.t))
     {
      stroke(0);
      this.t = (this.v-this.v0)/this.a
      text(this.t.toFixed(2)+" sec", 100, yPosition + 17 * 4 - 4);
      text("t = (v-v0)/a", 130,80)
     }
     
     if(isNaN(v0))
     {
      stroke(0);
      this.v0 = this.v-this.a*this.t 
      text(this.v0.toFixed(2)+" m/s", 100, yPosition + 23 * 4 - 4);
      text("v0 = v-a * t", 130,80)
     }
    
     
   }