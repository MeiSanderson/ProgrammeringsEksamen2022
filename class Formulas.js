//child klasse af Overklasse
class Formulas extends OverKlasse
{

 constructor (r,g,b,xPlus,yPlus,formel)
  {
   //kalder overklassens constructor
   super(r,g,b,xPlus,yPlus);

   //laver constructorens sidste parameter til en privat variabel
   this.formel = formel;
   this.ligning = ""
    
   //laver nye variabler for klassen Fromulas
   this.xPosition = 20;
   this.yPosition = -200;
   this.xPosText = 110;
   this.yPosText = -200;
    
   //instansierer inputfelter, giver dem en placering og størrelse
   this.inputFelt0 = createInput();
   this.inputFelt0.position(this.xPosition, this.yPosition);
   this.inputFelt0.size(50);
   this.inputFelt1 = createInput();
   this.inputFelt1.position(this.xPosition, this.yPosition);
   this.inputFelt1.size(50);
   this.inputFelt2 = createInput();
   this.inputFelt2.position(this.xPosition, this.yPosition);
   this.inputFelt2.size(50);
   this.inputFelt3 = createInput();
   this.inputFelt3.position(this.xPosition, this.yPosition);
   this.inputFelt3.size(50);
   this.inputFelt4 = createInput();
   this.inputFelt4.position(this.xPosition, this.yPosition);
   this.inputFelt4.size(50);

  }

  On_Off()
  {
   //tjekker om der er klikket på knappen
   if(super.On_Off() == true)
    {
     this.yPosition = 80;
     this.yPosText = 55;

     //reset plads for isoleret ligning og resultat
     fill(this.backgroundR,this.backgroundG,this.backgroundB);
     rect(5,45,285,200);
      
     //tjekker om det er den første funktion, der er klikket på
     if(this.formel == "første")
      {
       //reset plads for ligning
       fill(this.backgroundR,this.backgroundG,this.backgroundB);
       rect(5,45,285,15);
          
       //skriver formlen
       fill(0);
       this.ligning = "s = 0,5 * a * t^2 + v0 * t + s0";
       this.centreringFormel = 35;
       text(this.ligning, this.xPosText - this.centreringFormel, this.yPosText);

       //flytter inputfelterne ned på formelregneren
       this.inputFelt0.position(this.xPosition, this.yPosition);
       this.inputFelt1.position(this.xPosition, this.yPosition + 25 * 1);
       this.inputFelt2.position(this.xPosition, this.yPosition + 25 * 2);
       this.inputFelt3.position(this.xPosition, this.yPosition + 25 * 3);
       this.inputFelt4.position(this.xPosition, this.yPosition + 25 * 4);

          
       //skriver hvad inputfelterne repræsenterer i formlen
       text("a",this.xPosition - 10, this.yPosition + 15);
       text("t",this.xPosition - 10, this.yPosition + 23 * 2 - 5);
       text("v0",this.xPosition - 15, this.yPosition + 23 * 3 - 4);
       text("s",this.xPosition - 10, this.yPosition + 23 * 4);
       text("s0",this.xPosition - 15, this.yPosition + 23 * 5);
          
      }

      
     //tjekker om det er den anden funktion, der er klikket på
     if(this.formel == "anden")
      {      
       //reset plads for ligning
       fill(this.backgroundR,this.backgroundG,this.backgroundB);
       rect(5,45,285,15);
          
       //skriver formlen
       fill(0);
       this.ligning = "v = a * t + v0";
       this.centreringFormel = 0;
       text(this.ligning, this.xPosText - this.centreringFormel, this.yPosText);
          
       //flytter inputfelterne ned på formelregneren
       this.inputFelt0.position(this.xPosition, this.yPosition);
       this.inputFelt1.position(this.xPosition, this.yPosition + 25 * 1);
       this.inputFelt2.position(this.xPosition, this.yPosition + 25 * 2);
       this.inputFelt3.position(this.xPosition, this.yPosition + 25 * 3);
          
          
       //skriver hvad inputfelterne repræsenterer i formlen
       text("v",this.xPosition - 10, this.yPosition + 15);
       text("a",this.xPosition - 10, this.yPosition + 23 * 2 - 5);
       text("t",this.xPosition - 10, this.yPosition + 23 * 3 - 4);
       text("v0",this.xPosition - 15, this.yPosition + 23 * 4);
       
      }
      
      
     //tjekker om det er den tredje funktion, der er klikket på
     if(this.formel == "tredje")
      {
       //reset plads for ligning
       fill(this.backgroundR,this.backgroundG,this.backgroundB);
       rect(5,45,285,15);
          
       //skriver formlen
       fill(0);
       this.ligning = "a = (v-v0) / (t-t0)";
       this.centreringFormel = 0;
       text(this.ligning, this.xPosText - this.centreringFormel, this.yPosText);
          
       //flytter inputfelterne ned på formelregneren
       this.inputFelt0.position(this.xPosition, this.yPosition);
       this.inputFelt1.position(this.xPosition, this.yPosition + 25 * 1);
       this.inputFelt2.position(this.xPosition, this.yPosition + 25 * 2);
       this.inputFelt3.position(this.xPosition, this.yPosition + 25 * 3);
       this.inputFelt4.position(this.xPosition, this.yPosition + 25 * 4);


       //skriver hvad inputfelterne repræsenterer i formlen
       text("a",this.xPosition - 10, this.yPosition + 15);
       text("v",this.xPosition - 10, this.yPosition + 23 * 2 - 5);
       text("v0",this.xPosition - 15, this.yPosition + 23 * 3 - 4);
       text("t",this.xPosition - 10, this.yPosition + 23 * 4);
       text("t0",this.xPosition - 15, this.yPosition + 23 * 5);

      }

      
     //tjekker om det er den fjerde funktion, der er klikket på
     if(this.formel == "fjerde")
      {
       //reset plads for ligning
       fill(this.backgroundR,this.backgroundG,this.backgroundB);
       rect(5,45,285,15);
          
       //skriver formlen
       fill(0);
       this.ligning = "s = 0,5 * a * t^2";
       this.centreringFormel = 0;
       text(this.ligning, this.xPosText - this.centreringFormel, this.yPosText);
          
       //flytter inputfelterne ned på formelregneren
       this.inputFelt0.position(this.xPosition, this.yPosition);
       this.inputFelt1.position(this.xPosition, this.yPosition + 25 * 1);
       this.inputFelt2.position(this.xPosition, this.yPosition + 25 * 2);


       //skriver hvad inputfelterne repræsenterer i formlen
       text("s",this.xPosition - 10, this.yPosition + 15);
       text("a",this.xPosition - 10, this.yPosition + 23 * 2 - 5);
       text("t",this.xPosition - 10, this.yPosition + 23 * 3 - 4);

      }


     //tjekker om det er den femte funktion, der er klikket på
     if(this.formel == "femte")
      {
       //reset plads for ligning
       fill(this.backgroundR,this.backgroundG,this.backgroundB);
       rect(5,45,285,15);

       //skriver formlen
       fill(0);
       this.ligning = "v^2 - v0^2 = 2 * a * s";
       this.centreringFormel = 0;
       text(this.ligning, this.xPosText - this.centreringFormel, this.yPosText);
          
       //flytter inputfelterne ned på formelregneren
       this.inputFelt0.position(this.xPosition, this.yPosition);
       this.inputFelt1.position(this.xPosition, this.yPosition + 25 * 1);
       this.inputFelt2.position(this.xPosition, this.yPosition + 25 * 2);
       this.inputFelt3.position(this.xPosition, this.yPosition + 25 * 3);


       //skriver hvad inputfelterne repræsenterer i formlen
       text("s",this.xPosition - 10, this.yPosition + 15);
       text("a",this.xPosition - 10, this.yPosition + 23 * 2 - 5);
       text("v",this.xPosition - 10, this.yPosition + 23 * 3 - 4);
       text("v0",this.xPosition - 15, this.yPosition + 23 * 4);
      }
      
    }
  }
  
  
  
  
  formula(beregning, resetting, deleting)
  {
   //tager funktionens parameter og laver dem om til lokale variabler
   this.beregning = beregning;
   this.resetting = resetting;
   this.deleting = deleting;

   //er der klikket på delete-knappen
   if(this.deleting == true)
    {
     //fjerner inputfelternes indskevne værdier
     this.inputFelt0.value("");
     this.inputFelt1.value("");
     this.inputFelt2.value("");
     this.inputFelt3.value("");
     this.inputFelt4.value("");
      
     //fjerner isoleret formel og svar
     fill(this.backgroundR,this.backgroundG,this.backgroundB);
     rect(5,60,280,15);
     rect(40,80,250,130);

    }
    
   //er der klikket på reset-knappen
   if(this.resetting == true)
    {
     //fjerner inputfelternes indskevne værdier
     this.inputFelt0.value("");
     this.inputFelt1.value("");
     this.inputFelt2.value("");
     this.inputFelt3.value("");
     this.inputFelt4.value("");

      
     //fjerner isoleret formel, formel og svar, samt inputfelternes præsentationer
     fill(this.backgroundR,this.backgroundG,this.backgroundB);
     rect(5,45,280,35);
     rect(40,80,250,130);
     rect(5,60,15,160);
      

     //flytter inputfelterne væk fra formelregneren
     this.yPosition = -200;

     this.inputFelt0.position(this.xPosition, this.yPosition);
     this.inputFelt1.position(this.xPosition, this.yPosition + 25 * 1);
     this.inputFelt2.position(this.xPosition, this.yPosition + 25 * 2);
     this.inputFelt3.position(this.xPosition, this.yPosition + 25 * 3);
     this.inputFelt4.position(this.xPosition, this.yPosition + 25 * 4);
      
    }

    
    
   fill(this.backgroundR,this.backgroundG,this.backgroundB);
   noStroke();
    
   //er der klikket på knappen udregn efter klik på første formel
   if(this.formel == "første" && this.beregning == true)
    {
     //kalder beregningsfunktionen for formlen
     this.beregning1()
    }


   if(this.formel == "anden" && this.beregning == true)
    {
     this.beregning2()
    }
      

   if(this.formel == "tredje" && this.beregning == true)
    {
     this.beregning3()
    }


   if(this.formel == "fjerde" && this.beregning == true)
    {
     this.beregning4()
    }
      

   if(this.formel == "femte" && this.beregning == true)
    {
     this.beregning5()
    }
  }
  
  
  
  
  beregning1()
  {
   //gør inputfelternes værdier til lokale variabler
   this.a1 = float(this.inputFelt0.value());
   this.t1 = float(this.inputFelt1.value());
   this.v01 = float(this.inputFelt2.value());
   this.s1 = float(this.inputFelt3.value());
   this.s01 = float(this.inputFelt4.value());

   //hvis kun s0 er ukendt beregnes s0, den og den isoleret formel skrives på formelregneren
   if(isNaN(this.s01) && isNaN(this.a1) == false && isNaN(this.t1) == false && isNaN(this.v01) == false && isNaN(this.s1) == false)
    {
     stroke(0);
     this.s01 = this.s1-1/2*this.a1*this.t1*this.t1-this.v01*this.t1;
     text(this.s01.toFixed(2) +" m", 100, this.yPosition + 30 * 4 - 4);
     text("s0 = s - 1/2 * a * t^2 - v0 * t", this.xPosText - 30, this.yPosText + 15);
    }
     
   //hvis kun v0 er ukendt beregnes v0, den og den isoleret formel skrives på formelregneren
   if(isNaN(this.v01) && isNaN(this.a1) == false && isNaN(this.t1) == false && isNaN(this.s01) == false && isNaN(this.s1) == false)
    {
     stroke(0);

     //kan ikke dividere med 0
     if(this.t1 != 0)
      {
       this.v01 = (this.s1-1/2*this.a1*this.t1*this.t1-this.s01)/this.t1;
       text(this.v01.toFixed(2) +" m/s", 100, this.yPosition + 17 * 4 - 4);
      }
      else
      {
       text("NaN", 100, this.yPosition + 17 * 4 - 4);
      }

     text("v0 = (s - 1/2 * a * t^2 - s0) / t", this.xPosText - 35, this.yPosText + 15);
    }

   //hvis kun a er ukendt beregnes a, den og den isoleret formel skrives på formelregneren
   if(isNaN(this.a1) && isNaN(this.s1) == false && isNaN(this.t1) == false && isNaN(this.s01) == false && isNaN(this.v01) == false)
    {
     stroke(0);

     //kan ikke dividere med 0
     if((1/2*this.t1*this.t1) != 0)
      {
       this.a1 = (this.s1-this.v01*this.t1-this.s01)/(1/2*this.t1*this.t1);
       text(this.a1.toFixed(2)+" m/s^2", 100, this.yPosition + 5 * 4 - 4);
      }
      else
      {
       text("NaN", 100, this.yPosition + 5 * 4 - 4);
      }

     text("a = (s - v0 * t - s0) / (1/2 * t^2)", this.xPosText - 40, this.yPosText + 15);
    }

   //hvis kun s er ukendt beregnes s, den og den isoleret formel skrives på formelregneren
   if(isNaN(this.s1) && isNaN(this.a1) == false && isNaN(this.t1) == false && isNaN(this.s01) == false && isNaN(this.v01) == false)
    {
     stroke(0);
     this.s1 = 1/2*this.a1*this.t1*this.t1+this.v01*this.t1+this.s01;
     text(this.s1.toFixed(2)+" m", 100, this.yPosition + 23 * 4 - 4);
     text("s = 1/2 * a * t^2 + v0 * t + s0", this.xPosText - 35, this.yPosText + 15);
    }
     
   //hvis kun t er ukendt beregnes t, den og den isoleret formel skrives på formelregneren
   if(isNaN(this.t1) && isNaN(this.s1) == false && isNaN(this.a1) == false && isNaN(this.s01) == false && isNaN(this.v01) == false)
    {
     stroke(0);

     //kan ikke tage kvadratroden af et negativt tal
     if(((this.v01*this.v01)-(4*(1/2*this.a1)*(this.s01-this.s1))) < 0)
      {
       text("NaN", 100, this.yPosition + 10 * 4 - 4);
      }
     //kan ikke dividere med 0
     if(this.a1 == 0)
      {
       text("NaN", 100, this.yPosition + 10 * 4 - 4);
      }
       
     if(((this.v01*this.v01)-(4*(1/2*this.a1)*(this.s01-this.s1))) >= 0 && this.a1 != 0)
      {
       this.t11 = (-this.v01 + sqrt((this.v01*this.v01)-(4*(1/2*this.a1)*(this.s01-this.s1))))/(2*1/2*this.a1);

       this.t21 = (-this.v01 - sqrt((this.v01*this.v01)-(4*(1/2*this.a1)*(this.s01-this.s1))))/(2*1/2*this.a1);
        
       text(this.t11.toFixed(2) + " / " + this.t21.toFixed(2)+" s", 100, this.yPosition + 10 * 4 - 4);
      }
       
     text("t = (-v0 +/- sqrt(v0^2 - 4 * (1/2 * a) * (s0-s))) / (1 * a)", this.xPosText - 97, this.yPosText + 15);
    }

  }
  
  beregning2()
  {
   //gør inputfelternes værdier til lokale variabler
   this.v2 = float(this.inputFelt0.value());
   this.a2 = float(this.inputFelt1.value());
   this.t2 = float(this.inputFelt2.value());
   this.v02 = float(this.inputFelt3.value());
    
   //hvis kun v er ukendt beregnes v, den og den isoleret formel skrives på formelregneren
   if(isNaN(this.v2) && isNaN(this.a2) == false && isNaN(this.t2) == false && isNaN(this.v02) == false)
     {
      stroke(0);
      this.v2 = this.a2*this.t2+this.v02
      text(this.v2.toFixed(2)+" m/s", 100, this.yPosition + 5 * 4 - 4);
      text("v = a * t + v0", this.xPosText - (-2), this.yPosText + 15);
     }
     
   //hvis kun a er ukendt beregnes a, den og den isoleret formel skrives på formelregneren
   if(isNaN(this.a2) && isNaN(this.v2) == false && isNaN(this.t2) == false && isNaN(this.v02) == false)
     {
      stroke(0);

      if(this.t2 != 0)
       {
        this.a2 = (this.v2-this.v02)/this.t2;
        text(this.a2.toFixed(2)+" m/s^2", 100, this.yPosition + 10 * 4 - 4);
       }
       else
       {
        text("NaN", 100, this.yPosition + 10 * 4 - 4);
       }

      text("a = (v-v0) / t", this.xPosText - (-2), this.yPosText + 15);
     }

   //hvis kun t er ukendt beregnes t, den og den isoleret formel skrives på formelregneren
   if(isNaN(this.t2) && isNaN(this.a2) == false && isNaN(this.v2) == false && isNaN(this.v02) == false)
    {
     stroke(0);


     if(this.a2 != 0)
      {
       this.t2 = (this.v2-this.v02)/this.a2;
       text(this.t2.toFixed(2)+" sec", 100, this.yPosition + 17 * 4 - 4);
      }
      else
      {
       text("NaN", 100, this.yPosition + 17 * 4 - 4);
      }

     text("t = (v-v0) / a", this.xPosText - (-2), this.yPosText + 15);
    }
     
   //hvis kun v0 er ukendt beregnes v0, den og den isoleret formel skrives på formelregneren
   if(isNaN(this.v02) && isNaN(this.a2) == false && isNaN(this.v2) == false && isNaN(this.t2) == false)
    {
     stroke(0);
     this.v02 = this.v2-this.a2*this.t2;
     text(this.v02.toFixed(2)+" m/s", 100, this.yPosition + 23 * 4 - 4);
     text("v0 = v - a * t", this.xPosText - (-2), this.yPosText + 15);
    }
  }

  beregning3()
  {
   //gør inputfelternes værdier til lokale variabler
   this.a3 = float(this.inputFelt0.value());
   this.v3 = float(this.inputFelt1.value());
   this.v03 = float(this.inputFelt2.value());
   this.t3 = float(this.inputFelt3.value());
   this.t03 = float(this.inputFelt4.value());
    
      
   //hvis kun v er ukendt beregnes v, den og den isoleret formel skrives på formelregneren
   if(isNaN(this.v3) && isNaN(this.a3) == false && isNaN(this.v03) == false && isNaN(this.t3) == false && isNaN(this.t03) == false)
    {
     stroke(0);

     if((this.t3-this.t03) != 0)
      {
       this.v3 = this.a3*(this.t3-this.t03)+this.v03;
       text(this.v3.toFixed(2)+" m/s", 100, this.yPosition + 11 * 4 - 4);
      }
      else
      {
       text("NaN", 100, this.yPosition + 11 * 4 - 4);
      }

     text("v = a * (t-t0) + v0", this.xPosText - 0, this.yPosText + 15);
    }
     
   if(isNaN(this.v03) && isNaN(this.a3) == false && isNaN(this.v3) == false && isNaN(this.t3) == false && isNaN(this.t03) == false)
    {
     stroke(0);

     if((this.t3-this.t03) != 0)
      {
       this.v03 = this.v3-this.a3*(this.t3-this.t03);
       text(this.v03.toFixed(2)+" m/s", 100, this.yPosition + 17 * 4 - 4);
      }
      else
      {
       text("NaN", 100, this.yPosition + 17 * 4 - 4);
      }

     text("v0 = v - a * (t-t0)", this.xPosText - 0, this.yPosText + 15);
    }

   if(isNaN(this.t3) && isNaN(this.a3) == false && isNaN(this.v3) == false && isNaN(this.v03) == false && isNaN(this.t03) == false)
    {
     stroke(0);
     this.t3 = ((this.v3-this.v03)/this.a3)+this.t03;

     if((this.t3-this.t03) != 0)
      {
       text(this.t3.toFixed(2)+" sec", 100, this.yPosition + 23 * 4 - 4);
      }
      else
      {
       text("NaN", 100, this.yPosition + 23 * 4 - 4);
      }

     text("t = ((v-v0) / a) + t0", this.xPosText - 5, this.yPosText + 15);
    }
     
   if(isNaN(this.t03) && isNaN(this.a3) == false && isNaN(this.v3) == false && isNaN(this.v03) == false && isNaN(this.t3) == false)
    {
     stroke(0);
     this.t03 = this.t3-(this.v3-this.v03)/this.a3;

     if((this.t3-this.t03) != 0)
      {
       text(this.t03.toFixed(2)+" sec", 100, this.yPosition + 30 * 4 - 4);
      }
      else
      {
       text("NaN", 100, this.yPosition + 30 * 4 - 4);
      }

     text("t0 = t - (v-v0) / a", this.xPosText - 0, this.yPosText + 15);
    }
     
   if(isNaN(this.a3) && isNaN(this.t03) == false && isNaN(this.v3) == false && isNaN(this.v03) == false && isNaN(this.t3) == false)
    {
     stroke(0);

     if((this.t3-this.t03) != 0)
      {
       this.a3 = (this.v3-this.v03)/(this.t3-this.t03);
       text(this.a3.toFixed(2)+" m/s^2", 100, this.yPosition + 5 * 4 - 4);
      }
      else
      {
       text("NaN", 100, this.yPosition + 5 * 4 - 4);
      }

     text("a = (v-v0) / (t-t0)", this.xPosText - 0, this.yPosText + 15);
    }
  }

  beregning4()
  {
   //gør inputfelternes værdier til lokale variabler
   this.s4 = float(this.inputFelt0.value());
   this.a4 = float(this.inputFelt1.value());
   this.t4 = float(this.inputFelt2.value());
    

   //hvis kun s er ukendt beregnes s, den og den isoleret formel skrives på formelregneren
   if(isNaN(this.s4) && isNaN(this.a4) == false && isNaN(this.t4) == false)
    {
     stroke(0);
     this.s4 = 1/2*this.a4*this.t4*this.t4;
     text(this.s4.toFixed(2)+" m", 100, this.yPosition + 5 * 4 - 4);
     text("s = 1/2 * a * t^2", this.xPosText - 0, this.yPosText + 15);
    }
     
   if(isNaN(this.a4) && isNaN(this.s4) == false && isNaN(this.t4) == false)
    {
     stroke(0);

     if((1/2*this.t4*this.t4) != 0)
      {
       this.a4 = this.s4/(1/2*this.t4*this.t4);
       text(this.a4.toFixed(2)+"m/s^2", 100, this.yPosition + 11 * 4 - 4);
      }
      else
      {
       text("NaN", 100, this.yPosition + 11 * 4 - 4);
      }

     text("a = s / (1/2 * t^2)", this.xPosText - 3, this.yPosText + 15);
    }

   if(isNaN(this.t4) && isNaN(this.a4) == false && isNaN(this.s4) == false )
    {
     stroke(0);
       
     if(this.s4/(1/2*this.a4) < 0)
      {
       text("NaN", 100, this.yPosition + 17 * 4 - 4);
      }
       
     if(this.s4/(1/2*this.a4) >= 0)
      {
       this.t4 = sqrt(this.s4/(1/2*this.a4));
       text(this.t4.toFixed(2) + " / " + "-" + this.t4.toFixed(2) + " sec", 100, this.yPosition + 17 * 4 - 4);
      }

     text("t = sqrt(s / (1/2 * a))", this.xPosText - 10, this.yPosText + 15);
       
    }
  }
  
  beregning5()
  {
   //gør inputfelternes værdier til lokale variabler
   this.s5 = float(this.inputFelt0.value());
   this.a5 = float(this.inputFelt1.value());
   this.v5 = float(this.inputFelt2.value());
   this.v05 = float(this.inputFelt3.value());
    

   //hvis kun S er ukendt beregnes S, den og den isoleret formel skrives på formelregneren
   if(isNaN(this.s5) && isNaN(this.a5) == false && isNaN(this.v5) == false && isNaN(this.v05) == false)
    {
     stroke(0);

     if((2*this.a5) != 0)
      {
       this.s5 = (this.v5*this.v5-this.v05*this.v05)/(2*this.a5);
       text(this.s5.toFixed(2)+" m", 100, this.yPosition + 5 * 4 - 4);
      }
      else
      {
       text("NaN", 100, this.yPosition + 5 * 4 - 4);
      }

     text("s = (v^2 - v0^2) / (2 * a)", this.xPosText - 5, this.yPosText + 15);
     }
     
   if(isNaN(this.a5) && isNaN(this.s5) == false && isNaN(this.v5) == false && isNaN(this.v05) == false)
    {
     stroke(0);

     if((2*this.s5) != 0)
      {
       this.a5 = (this.v5*this.v5-this.v05*this.v05)/(2*this.s5);
       text(this.a5.toFixed(2)+" m/s^2", 100, this.yPosition + 11 * 4 - 4);
      }
      else
      {
       text("NaN", 100, this.yPosition + 11 * 4 - 4);
      }

     text("a = (v^2 - v0^2) / (2 * s)", this.xPosText - 5, this.yPosText + 15);
    }

   if(isNaN(this.v5) && isNaN(this.s5) == false && isNaN(this.a5) == false && isNaN(this.v05) == false)
    {
     stroke(0);
       
     if((2*this.a5*this.s5+this.v05*this.v05) < 0)
      {
       text("NaN", 100, this.yPosition + 17 * 4 - 4);
      }
       
       
      if((2*this.a5*this.s5+this.v05*this.v05) >= 0)
      {
       this.v5 = sqrt(2*this.a5*this.s5+this.v05*this.v05);
       text(this.v5.toFixed(2)+" m/s", 100, this.yPosition + 17 * 4 - 4);
      }
       
     text("v = sqrt(2 * a * s + v0^2)", this.xPosText - 15, this.yPosText + 15);
    }
     
   if(isNaN(this.v05) && isNaN(this.s5) == false && isNaN(this.a5) == false && isNaN(this.v5) == false)
    {
     stroke(0);
       
     if(((this.v5*this.v5)-(2*this.a5*this.s5)) < 0)
      {
       text("NaN", 100, this.yPosition + 23 * 4 - 4);
      }
       
       
     if(((this.v5*this.v5)-(2*this.a5*this.s5)) >= 0)
      {
       this.v05 = sqrt((this.v5*this.v5)-(2*this.a5*this.s5));
       text(this.v05.toFixed(2)+" m/s", 100, this.yPosition + 23 * 4 - 4);
      }
       
     text("v0 = sqrt(v^2 - (2 * a * s))", this.xPosText - 15, this.yPosText + 15);
    }
  }
  
  
  
}