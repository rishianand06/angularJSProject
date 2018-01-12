var Employee = /** @class */ (function () {
    function Employee(eid, name, status) {
        this.eid = eid;
        this.name = name;
        this.status = status;
    }
    Employee.prototype.getEid = function () {
        return this.eid;
    };
    Employee.prototype.getName = function () {
        return this.name;
    };
    Employee.prototype.getStatus = function () {
        return this.status;
    };
    return Employee;
}());
var employee = new Employee(101, 'John', true);
console.log(employee.getEid());
console.log(employee.getName());
console.log(employee.getStatus());
