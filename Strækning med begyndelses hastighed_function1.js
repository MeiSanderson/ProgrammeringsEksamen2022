xPosition = 25;
yPosition = 100;
let a
let t
let v0
let s
let s0

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
 text("t",xPosition - 10, yPosition + 23 * 2 - 5);
 text("v0",xPosition - 15, yPosition + 23 * 3 - 4);
 text("s",xPosition - 10, yPosition + 23 * 4);
 text("s0",xPosition - 15, yPosition + 23 * 5);

 }

   function værdi()
   {
    this.a = float(inputFelt0.value());
    this.t = float(inputFelt1.value());
    this.v0 = float(inputFelt2.value());
    this.s = float(inputFelt3.value());
    this.s0 = float(inputFelt4.value());
    

     
    
     if(isNaN(this.s0))
     {
      stroke(0);
      this.s0 = this.s-1/2*this.a*this.t*this.t-this.v0*this.t;
      text(this.s0.toFixed(2), 100, yPosition + 30 * 4 - 4);
      text("s0 = s - 1/2 * a * t *t - v0 * t", 130,80)
     }
     
      if(isNaN(this.v0))
     {
      stroke(0);
      this.v0 = (this.s-1/2*this.a*this.t*this.t-this.s0)/this.t;
      text(this.v0.toFixed(2), 100, yPosition + 17 * 4 - 4);
      text("v0 = (s - 1/2 * a * t * t - s0) / t", 130,80)
     }

      if(isNaN(this.a))
     {
      stroke(0);
      this.a = (this.s-this.v0*this.t-this.s0)/(1/2*this.t*this.t)
      text(this.a.toFixed(2), 100, yPosition + 5 * 4 - 4);
      text("a = (s-v0 * t-s0) / (1/2 * t * t)", 130,80) 
     }
     
      if(isNaN(this.s))
     {
      stroke(0);
      this.s = 1/2*this.a*this.t*this.t+this.v0*this.t+this.s0
      text(this.s.toFixed(2), 100, yPosition + 23 * 4 - 4);
      text("s = 1/2 * a * t * t+v0 * t+s0", 130,80)
     }
     
      if(isNaN(this.t))
     {
      stroke(0);
      this.t = (-this.v0+sqrt(this.v0*this.v0-4*(1/2*this.a)*(this.s0-this.s)))/2*1/2*this.a
      text("t = (-v0+sqrt(v0 * v0-4 * (1/2 * a) * (s0-s))) / 2 * 1/2 * a", 100,80)
      
     }
     
      if(this.t<0)
     {
      this.t = (-this.v0-sqrt(this.v0*this.v0-4*(1/2*this.a)*(this.s0-this.s)))/2*1/2*this.a
      text(this.t.toFixed(2), 100, yPosition + 10 * 4 - 4);
     }
   }
     
    