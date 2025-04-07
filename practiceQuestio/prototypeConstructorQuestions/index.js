// 1. Vehicle Constructor
// Question:
// Create a Vehicle constructor function in JavaScript that takes type, wheels, and speed as parameters. Use the prototype to add a method called describe that prints out, "This is a [type] with [wheels] wheels, and it can go up to [speed] km/h."
// Hint:Remember to use this in the constructor to assign the properties. In the describe method on the prototype, you’ll use this again to access these properties.

function Vehicle(type, wheels, speed) {
    this.type = type;
    this.wheels = wheels;
    this.speed = speed;
}

Vehicle.prototype.describe = function() {
    console.log(`This is a ${this.type} with ${this.wheels} wheels, and it can go up to ${this.speed} km/h.`);
}

let car = new Vehicle("Car", 4, 200);
car.describe();
let bike = new Vehicle("Bike", 2, 50);
bike.describe();
let truck = new Vehicle("Truck", 6, 120);
truck.describe();
// console.log(car);
