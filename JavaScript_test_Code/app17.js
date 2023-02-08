class Vacation {

    constructor(destination, length) {
      this.destination = destination;
      this.length = length;
    }

    // A class can have only one constructor
    // constructor(destination, length, time) {
    //     this.destination = destination;
    //     this.length = length;
    //     this.time = time;
    // }

    print() {
      console.log(`${this.destination}: will take ${this.length} days.`);
    }

}

const trip = new Vacation("Goa", 9);
trip.print();