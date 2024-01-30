class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk(){
        return "Beep!";
    }

    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year} `;
    }
}

class Car extends Vehicle{

    constructor(make, model, year){
        super(make, model, year);
        this.wheels = 4;
    }

    numWheels(){
        return this.wheels;
    }

}

class Motorcycle extends Vehicle{

    constructor(make, model, year){
        super(make, model, year);
        this.wheels = 2;
    }

    numWheels(){
        return this.wheels;
    }

    revEngine(){
        return "VROOM!";
    }

}

class Garage{
    constructor(spaces){
        this.spaces = spaces;
        this.vehicles = [];
    }
    
    add(newVehicle){

            if (!(newVehicle instanceof Vehicle)) {
              return "Only vehicles are allowed in here!";
            }
            if (this.vehicles.length >= this.spaces) {
              return "Sorry, we're full.";
            }
            this.vehicles.push(newVehicle);
            return "Vehicle added!";
          
       
    }

}

let two = 2;
let three = 3;
let name = "Diego";

const cat = {
    name: "Blue",
    sum: two + three,
    greet: function(){
        console.log("miau my name is", this.name);
    }
}