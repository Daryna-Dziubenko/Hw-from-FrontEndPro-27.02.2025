/*Створіть клас BankAccount, який буде представляти банківський рахунок. Додайте властивість балансу та методи для внесення та зняття грошей.

class BankAccount {

// Ваш код тут

}

const account1 = new BankAccount(1000);
console.log(account1.getBalance()); // 1000

account1.deposit(500);
console.log(account1.getBalance()); // 1500

account1.withdraw(200);
console.log(account1.getBalance()); // 1300*/

class BankAccount {
    constructor(balans){
        this.balans = balans;
    }

    deposit(sumDeposit){
        this.balans += sumDeposit;
    }

    withdraw(sumWithdraw){
        if (sumWithdraw > this.balans) {
            return "Недостатньо коштів на рахунку";
        }
        this.balans -= sumWithdraw;
    }

    getBalance() {
        return this.balans;
    }
}

const account1 = new BankAccount(2000);
console.log(account1.getBalance()); // 2000

account1.deposit(2900);
console.log(account1.getBalance()); // 4900

account1.withdraw(355);
console.log(account1.getBalance()); // 4545