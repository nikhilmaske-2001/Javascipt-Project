const tut = 27;
console.log("This is tut " + tut);

//object literal for creating object
let car = {
    name: "Maruti 800",
    topSpeed: 90,
    run: function () {
        console.log("Car is running");
    }
}

// console.log(car);


//Creating a constructor for cars
function GeneralCars(givenName, givenSpeed) {
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function () {
        console.log(`${this.name} is running`);
    }
    this.analyze = function () {
        console.log(`This car is slower by ${200 - this.topSpeed} than Mercedes`)
    }
}

car1 = new GeneralCars("Nissan", 180);
car2 = new GeneralCars("Maruti alto", 50);
car3 = new GeneralCars("BMW", 200);
console.log(car1, car2, car3);