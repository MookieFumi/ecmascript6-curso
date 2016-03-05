var Vehicle = function Vehicle(brand, model, color) {
    // Initialization
    this.brand = brand;
    this.model = model;
    this.color = color;
}

// Instance methods
Vehicle.prototype = {
    whoIam: function whoIam() {
        return `My vehicle is a ${this.brand} ${this.model} (${this.color})`;
    }
}

var Car = function Car() {};
Car.prototype = new Vehicle('ford', 'scort', 'red');
Car.prototype.honk = function honk() {
    return "MOOOOC!"
};
var car = new Car();
console.log(car.honk()); // MOOOOC!
console.log(car.whoIam()); // My vehicle is a ford scort (red)
console.log(car.color); // red
console.log(car instanceof Car); // true
console.log(car instanceof Vehicle); // true
