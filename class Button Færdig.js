//child klasse af Overklasse
class Button extends OverKlasse
{

 constructor (r,g,b,xPlus,yPlus,navn)
  {
   //kalder overklassens constructor
   super(r,g,b,xPlus,yPlus);

   //laver constructorens sidste parameter til en privat variabel
   this.navn = navn;
  }


  OverKnap()
  {
   //kalder overklassens OverKnap funktion, der tegnede knappen og påvirkede dens farve
   super.OverKnap();
    
   //skriver formelnavn på knap
   fill(0);
   textSize(8);
   text(this.navn,this.xKoordinat + this.xPlus + 1, this.yKoordinat + this.yPlus + 13);
    
    textSize(12);
  }
  
  On_Off()
  {
   //tjekker om der er klikket på knappen
   if(super.On_Off() == true)
    {
     //afspiller lyd
     mySoundKnap.play();
    }
  }

}