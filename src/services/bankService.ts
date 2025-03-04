import { Account } from "../model/bankModel";

export class BankService {
    private accounts: Account[] = [];

    createAccount(accountNumber: string , initialBalance: number): Account{
        const newAccount = new Account(accountNumber , initialBalance);
        this.accounts.push(newAccount);
        return newAccount;
    }

    getAllAccounts(): Account[] {
        return this.accounts;
    }

    findAccount(accountNumber: string): Account | undefined {
        return this.accounts.find(acc => acc.getAccountNumber() === accountNumber);
    }
}