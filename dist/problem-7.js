"use strict";
{
    //  problem 7 solved
    class Car {
        constructor(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        getCarAge() {
            const currentYear = new Date().getFullYear(); // current year
            return currentYear - this.year;
        }
    }
    const car = new Car("Honda", "Civic", 2008);
    const output = car.getCarAge();
    console.log(output);
    //
}
