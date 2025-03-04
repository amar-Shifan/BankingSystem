export class Account {
    private balance: number;
    private accountNumber: string;

    constructor(accountNumber: string , initialBalance: number) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        if(amount > 0) {
            this.balance += amount;
        }
    }

    withdraw(amount: number):void {
        if(amount > 0 && amount <= this.balance){
            this.balance -= amount;
        }
    }

    getBalance(): number{
        return this.balance
    }

    getAccountNumber(): string {
        return this.accountNumber;
    }
}

