beregning1()
   {
    this.a = float(this.inputFelt0.value());
    this.t = float(this.inputFelt1.value());
    this.v0 = float(this.inputFelt2.value());
    this.s = float(this.inputFelt3.value());
    this.s0 = float(this.inputFelt4.value());
    

     if(isNaN(this.s0))
     {
      stroke(0);
      this.s0 = this.s-1/2*this.a*this.t*this.t-this.v0*this.t;
      text(this.s0.toFixed(2), 100, this.yPosition + 30 * 4 - 4);
      text("s0 = s - 1/2 * a * t *t - v0 * t", this.xPosText - 30, this.yPosText + 15);
     }
     
      if(isNaN(this.v0))
     {
      stroke(0);
      this.v0 = (this.s-1/2*this.a*this.t*this.t-this.s0)/this.t;
      text(this.v0.toFixed(2), 100, this.yPosition + 17 * 4 - 4);
      text("v0 = (s - 1/2 * a * t * t - s0) / t", this.xPosText - 30, this.yPosText + 15)
     }

      if(isNaN(this.a))
     {
      stroke(0);
      this.a = (this.s-this.v0*this.t-this.s0)/(1/2*this.t*this.t)
      text(this.a.toFixed(2), 100, this.yPosition + 5 * 4 - 4);
      text("a = (s-v0 * t-s0) / (1/2 * t * t)", this.xPosText - 30, this.yPosText + 15) 
     }
     
      if(isNaN(this.s))
     {
      stroke(0);
      this.s = 1/2*this.a*this.t*this.t+this.v0*this.t+this.s0
      text(this.s.toFixed(2), 100, this.yPosition + 23 * 4 - 4);
      text("s = 1/2 * a * t * t+v0 * t+s0", this.xPosText - 30, this.yPosText + 15)
     }
     
      if(isNaN(this.t))
     {
      stroke(0);

      if((this.v0*this.v0-4*(1/2*this.a)*(this.s0-this.s)) < 0)
      {
        text("NaN", 100, this.yPosition + 10 * 4 - 4);
      }
       
      if((this.v0*this.v0-4*(1/2*this.a)*(this.s0-this.s)) > 0)
      {
      this.t1 = (-this.v0+sqrt(this.v0*this.v0-4*(1/2*this.a)*(this.s0-this.s)))/2*1/2*this.a

      this.t2 = (-this.v0 - sqrt(this.v0*this.v0-4*(1/2*this.a)*(this.s0-this.s)))/2*1/2*this.a
      text("t = (-v0+sqrt(v0 * v0-4 * (1/2 * a) * (s0-s))) / 2 * 1/2 * a", this.xPosText - 30, this.yPosText + 15)
        
        
      text(this.t1.toFixed(2) + " / " + this.t2.toFixed(2), 100, this.yPosition + 10 * 4 - 4);
      }
       
      text("t = (-v0+sqrt(v0 * v0-4 * (1/2 * a) * (s0-s))) / 2 * 1/2 * a", this.xPosText - 30, this.yPosText + 15)
   }
     
     
   } 
  
  beregning2()
  {
    this.v = float(inputFelt0.value());
    this.a = float(inputFelt1.value());
    this.t = float(inputFelt2.value());
    this.v0 = float(inputFelt3.value());
    
    
     if(isNaN(this.v))
     {
      stroke(0);
      this.v = this.a*this.t+this.v0
      text(this.v.toFixed(2)+" m/s", 100, this.yPosition + 5 * 4 - 4);
      text("v = a * t + v0", 130,80)
     }
     
      if(isNaN(this.a))
     {
      stroke(0);
      this.a = (this.v-this.v0)/this.t
      text(this.a.toFixed(2)+" m/s^2", 100, this.yPosition + 10 * 4 - 4);
      text("a = (v-v0)/t", 130,80)
     }

      if(isNaN(this.t))
     {
      stroke(0);
      this.t = (this.v-this.v0)/this.a
      text(this.t.toFixed(2)+" sec", 100, this.yPosition + 17 * 4 - 4);
      text("t = (v-v0)/a", 130,80)
     }
     
     if(isNaN(v0))
     {
      stroke(0);
      this.v0 = this.v-this.a*this.t 
      text(this.v0.toFixed(2)+" m/s", 100, this.yPosition + 23 * 4 - 4);
      text("v0 = v-a * t", 130,80)
     }
  }
  
    beregning3()
    {
      this.a = float(inputFelt0.value());
      this.v = float(inputFelt1.value());
      this.v0 = float(inputFelt2.value());
      this.t = float(inputFelt3.value());
      this.t0 = float(inputFelt4.value());
    
      
     if(isNaN(this.v))
     {
      stroke(0);
      this.v = this.a*(this.t-this.t0)+this.v0
      text(this.v.toFixed(2)+" m/s", 100, this.yPosition + 11 * 4 - 4);
      text("v = a * (t-t0)+v0", 130,80)
     }
     
      if(isNaN(this.v0))
     {
      stroke(0);
      this.v0 = this.v-this.a*(this.t-this.t0)
      text(this.v0.toFixed(2)+" m/s", 100, this.yPosition + 17 * 4 - 4);
      text("v0 = v-a * (t-t0)", 130,80)
     }

      if(isNaN(this.t))
     {
      stroke(0);
      this.t = ((this.v-this.v0)/this.a)+this.t0
      text(this.t.toFixed(2)+" sec", 100, this.yPosition + 23 * 4 - 4);
      text("t = ((v-v0)/a)+t0", 130,80)
     }
     
      if(isNaN(this.t0))
     {
      stroke(0);
      this.t0 = this.t-(this.v-this.v0)/this.a
      text(this.t0.toFixed(2)+" sec", 100, this.yPosition + 30 * 4 - 4);
      text("t0 = t-(v-v0)/a", 130,80)
     }
     
      if(isNaN(this.a))
     {
      stroke(0);
      this.a = (this.v-this.v0)/(this.t-this.t0)
      text(this.a.toFixed(2)+" m/s^2", 100, this.yPosition + 5 * 4 - 4);
      text("a = (v-v0)/(t-t0)", 130,80)
     }
    }
  
  beregning4()
  {
    this.s = float(inputFelt0.value());
    this.a = float(inputFelt1.value());
    this.t = float(inputFelt2.value());
    
    
     if(isNaN(this.s))
     {
      stroke(0);
      this.s = 1/2*this.a*this.t*this.t;
      text(this.s.toFixed(2)+" m", 100, this.yPosition + 5 * 4 - 4);
      text("s = 1/2 * a * t * t", 130,80)
     }
     
      if(isNaN(this.a))
     {
      stroke(0);
      this.a = this.s/(1/2*this.t*this.t);
      text(this.a.toFixed(2)+"m/s^2", 100, this.yPosition + 11 * 4 - 4);
      text("a = s/(1/2 * t * t)", 130,80)
     }

      if(isNaN(this.t))
     {
      stroke(0);
      this.t = sqrt(this.s/(1/2*this.a));
      text(this.t.toFixed(2)+" sec", 100, this.yPosition + 17 * 4 - 4);
      text("t = sqrt(s/(1/2 * a))", 130,80)
     }
     
  }
  
  beregning5()
  {
    this.s = float(inputFelt0.value());
    this.a = float(inputFelt1.value());
    this.v = float(inputFelt2.value());
    this.v0 = float(inputFelt3.value());
    

    
     if(isNaN(this.s))
     {
      stroke(0);
      this.s = (this.v*this.v-this.v0*this.v0)/2*this.a;
      text(this.s.toFixed(2)+" m", 100, this.yPosition + 11 * 4 - 4);
      text("s = (v * v-v0 * v0)/2 * a)", 130,80)
     }
     
      if(isNaN(this.a))
     {
      stroke(0);
      this.a = (this.v*this.v-this.v0*this.v0)/2*this.s;
      text(this.a.toFixed(2)+" m/s^2", 100, this.yPosition + 17 * 4 - 4);
      text("v0 = v-a * (t-t0)", 130,80)
     }

      if(isNaN(this.v))
     {
      stroke(0);
      this.v = sqrt(2*this.a*this.s+this.v0*this.v0)
      text(this.v.toFixed(2)+" m/s", 100, this.yPosition + 23 * 4 - 4);
      text("v = sqrt(2 * a * s+v0 * v0)", 130,80)
     }
     
      if(isNaN(this.v0))
     {
      stroke(0);
      this.v0 = sqrt(2*this.a*this.s-this.v*this.v)
      text(this.v0.toFixed(2)+" m/s", 100, this.yPosition + 30 * 4 - 4);
      text("v0 = sqrt((v * v)/2 * a * s)", 130,80)
     }

}