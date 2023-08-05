class Cars{
    constructor(model, mpg){
      this.model=model;
      this.mpg=mpg;
      this.tank= 0;
      this.odometer=0;
    }
    fill(gallons){
      this.tank +=gallons;
    }
    drive(distance){
      if(this.tank === 0 || this.tank - this.mpg <=0){
        return "i ran out of fuel"
      }
      this.odometer += distance;
      this.tank -= this.mpg/this.mpg;
      return "driving"
    }
  }
  let car = new Cars("indigo", 10);
  
  
  
  
  car.fill(100)
  console.log(car.drive(50));