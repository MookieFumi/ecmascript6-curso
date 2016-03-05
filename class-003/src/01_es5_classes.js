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

var motorcycle = new Vehicle('kawasaki', 'j300', 'white');

console.log(motorcycle.whoIam());
