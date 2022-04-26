xPosition = 25;
yPosition = 100;
let s
let a
let v
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
  button.position(xPosition, yPosition + 18 * 6);
  button.mousePressed(værdi);

  angleMode(DEGREES);
}

 function draw()
 {
 stroke(0);
 fill(68, 130, 124);
 rect(5, 90, 89, 170);
 fill(0);
 text("s",xPosition - 10, yPosition + 15);
 text("a",xPosition - 10, yPosition + 23 * 2 - 5);
 text("v",xPosition - 10, yPosition + 23 * 3 - 4);
 text("v0",xPosition - 15, yPosition + 23 * 4);

 }

   function værdi()
   {
    this.s = float(inputFelt0.value());
    this.a = float(inputFelt1.value());
    this.v = float(inputFelt2.value());
    this.v0 = float(inputFelt3.value());
    

    
     if(isNaN(this.s))
     {
      stroke(0);
      this.s = (this.v*this.v-this.v0*this.v0)/2*this.a;
      text(this.s.toFixed(2)+" m", 100, yPosition + 11 * 4 - 4);
      text("s = (v * v-v0 * v0)/2 * a)", 130,80)
     }
     
      if(isNaN(this.a))
     {
      stroke(0);
      this.a = (this.v*this.v-this.v0*this.v0)/2*this.s;
      text(this.a.toFixed(2)+" m/s^2", 100, yPosition + 17 * 4 - 4);
      text("v0 = v-a * (t-t0)", 130,80)
     }

      if(isNaN(this.v))
     {
      stroke(0);
      this.v = sqrt(2*this.a*this.s+this.v0*this.v0)
      text(this.v.toFixed(2)+" m/s", 100, yPosition + 23 * 4 - 4);
      text("v = sqrt(2 * a * s+v0 * v0)", 130,80)
     }
     
      if(isNaN(this.v0))
     {
      stroke(0);
      this.v0 = sqrt(2*this.a*this.s-this.v*this.v)
      text(this.v0.toFixed(2)+" m/s", 100, yPosition + 30 * 4 - 4);
      text("v0 = sqrt((v * v)/2 * a * s)", 130,80)
     }
     
  
     
  
   }
     
    