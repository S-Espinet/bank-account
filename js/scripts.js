function BankAccount() {
  this.clientName = "";
  this.balance = 0;
  this.newBalance = 0;
  this.deposit = 0;
  this.withdrawal = 0;
}

BankAccount.prototype.newBalanceDeposit = function() {
  if (isNaN(this.deposit) === false) {
    this.deposit = parseInt(this.deposit);
    this.newBalance = this.balance + this.deposit;
  }
};

BankAccount.prototype.newBalanceWithdrawal = function() {
  if (isNaN(this.withdrawal) === false) {
    this.withdrawal = parseInt(this.withdrawal);
    this.newBalance = this.balance - this.withdrawal;
  }
};

let myBankAccount = new BankAccount();

$(document).ready(function() {

  $("#register-form").submit(function(event) {
    event.preventDefault();
    myBankAccount.clientName = $("input#name").val();
    myBankAccount.newBalance = parseInt($("input#initial-deposit").val());
    myBankAccount.balance = myBankAccount.newBalance;
    $("#show-balance").html("<h2>Balance: " + myBankAccount.balance + "</h2>");
  });
  $("#deposit-form").submit(function(event) {
    event.preventDefault();
    myBankAccount.withdrawal = parseInt($("input#withdrawal").val());
    myBankAccount.deposit = parseInt($("input#deposit").val());
    myBankAccount.newBalanceDeposit()
    myBankAccount.balance = myBankAccount.newBalance;
    myBankAccount.newBalanceWithdrawal()
    myBankAccount.balance = myBankAccount.newBalance;
    $("#show-balance").html("<h2>Balance: " + myBankAccount.balance + "</h2>");
    console.log(myBankAccount);
  });
});