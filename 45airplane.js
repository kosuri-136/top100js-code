function Airplane(name) {
    this.name = name;
    this.takeOff = function() {
       this.isFlying = true;
      console.log(this.name + "  flying.");
    };
  
    this.land = function() {
      this.isFlying = false;
      console.log(this.name + "  landing.");
    };
  }
  let airCRAFT=new Airplane("AIR INDIA PLANE");
  
  airCRAFT.takeOff();
  airCRAFT.land();