var HomeLoan = /** @class */ (function () {
    function HomeLoan() {
    }
    return HomeLoan;
}());
var CarLoan = /** @class */ (function () {
    function CarLoan() {
    }
    return CarLoan;
}());
function loanApproval(loan) {
    console.log(loan instanceof HomeLoan);
}
loanApproval(new HomeLoan());
loanApproval(new CarLoan());
