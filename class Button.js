class Button
{

 constructor (r,g,b,xPlus,yPlus)
  {
   this.r = r;
   this.g = g;
   this.b = b;
   this.xPlus = xPlus;
   this.yPlus = yPlus;
  }

 knap()
 {
   //hardcoder variabler for knappernes position
   this.xKoordinat = 15;
   this.yKoordinat = 20;
   this.bredde = 45;
   this.længde = 20;
  
    //if sætning for hvis mus er over objekt, så skal farve blive mørkere
    if(mouseX > this.xKoordinat + this.xPlus && mouseX < this.xKoordinat + this.xPlus + this.bredde && mouseY > this.yKoordinat + this.yPlus && mouseY < this.yKoordinat + this.yPlus + this.længde)
     {
      fill(this.r * 0.9,this.g * 0.9,this.b * 0.9);
      text("hej",200,100);//denne skiftes ud med den rektangel som skal vise farven?
     }
   else
     {
      fill(this.r,this.g,this.b);
     }  

   //tegner knapperne/rektanglerne
   noStroke();
   rect(this.xKoordinat + this.xPlus, this.yKoordinat + this.yPlus, this.bredde, this.længde);
    
   //funktion for når der er klikket på objekt
   this.klikket = function()
    {
     //if sætning der tjekker om der er blevet klikket på objekt
     if(mouseX > this.xKoordinat + this.xPlus && mouseX < this.xKoordinat + this.xPlus + this.bredde && mouseY > this.yKoordinat + this.yPlus && mouseY < this.yKoordinat + this.yPlus + this.længde)
      {
       text("ello",200 + this.xPlus,150 + this.yPlus);
        
       this.erDerKlikket = true;
         
       return this.erDerKlikket
      }
    }

   //if sætning for hvis der er klikket, så skal en mørkere version af knappen laves over
   if(this.erDerKlikket == true)
    {
     fill(this.r * 0.7,this.g * 0.7,this.b * 0.7);
     noStroke();
     rect(this.xKoordinat + this.xPlus, this.yKoordinat + this.yPlus, this.bredde, this.længde);

      //funktion for når der er klikket på objekt
      this.klikket = function()
       {
        if(mouseX > this.xKoordinat + this.xPlus && mouseX < this.xKoordinat + this.xPlus + this.bredde && mouseY > this.yKoordinat + this.yPlus && mouseY < this.yKoordinat + this.yPlus + this.længde)
         {
          text("ello",200 + this.xPlus,150 + this.yPlus);
          this.erDerKlikket = false;

          return this.erDerKlikket
        }
       }
      
     }
 }
  
}