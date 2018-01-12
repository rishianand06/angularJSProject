class HomeLoan {

}

class CarLoan {

}

type LoanType = HomeLoan | CarLoan;

function loanApproval(loan: LoanType): void {

    
    console.log(loan instanceof HomeLoan);
}

loanApproval(new HomeLoan());
loanApproval(new CarLoan());
