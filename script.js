/*var car = {
    make: "VW",
    type: "Polo",
    color: "blue",
    isTurnedOn: false,
    numberOfWheels: 4,
    seats: ["seat1", "seat2", "seat3", "seat4"],
    turnOn: function () {
        this.isTurnedOn = true;
    }
};

console.log('hello there');*/

var doCoolStuff = function () {
    var currentClassName =
        document.getElementById("cool").className;

    if (currentClassName == "cool") {
        document.getElementById("cool").className = "cool red";
    } else {
        document.getElementById("cool").className = "cool";
    }

}