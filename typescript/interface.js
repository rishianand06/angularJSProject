var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.accelerate = function () {
        console.log("acceleration....");
    };
    return Vehicle;
}());
var vehicle = new Vehicle();
vehicle.accelerate();
