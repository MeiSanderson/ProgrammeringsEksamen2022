xPosition = 25;
yPosition = 100;
let s
let a
let t


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


  button = createButton("Udregn");
  button.position(xPosition, yPosition + 21 * 4);
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
 text("t",xPosition - 10, yPosition + 23 * 3 - 4);
 

 }

   function værdi()
   {
    this.s = float(inputFelt0.value());
    this.a = float(inputFelt1.value());
    this.t = float(inputFelt2.value());
    
    

     
    
     if(isNaN(this.s))
     {
      stroke(0);
      this.s = 1/2*this.a*this.t*this.t;
      text(this.s.toFixed(2), 100, yPosition + 5 * 4 - 4);
      text("s = 1/2 * a * t * t", 130,80)
     }
     
      if(isNaN(this.a))
     {
      stroke(0);
      this.a = this.s/(1/2*this.t*this.t);
      text(this.a.toFixed(2), 100, yPosition + 11 * 4 - 4);
      text("a = s/(1/2 * t * t)", 130,80)
     }

      if(isNaN(this.t))
     {
      stroke(0);
      this.t = sqrt(this.s/(1/2*this.a));
      text(this.t.toFixed(2), 100, yPosition + 17 * 4 - 4);
      text("t = sqrt(s/(1/2 * a))", 130,80)
     }
     
  
   }
     
    