import { Request, Response } from "express";
import { BankService } from "../services/bankService";

const bankService = new BankService();

export const renderHomePage = (req: Request, res: Response) => {
    res.render("index", { accounts: bankService.getAllAccounts() });
};

export const createAccount = (req: Request, res: Response) => {
    const { accountNumber, initialBalance } = req.body;
    if (!accountNumber || isNaN(Number(initialBalance))) {
        return res.redirect("/");
    }
    bankService.createAccount(accountNumber, Number(initialBalance));
    res.redirect("/");
};

export const depositMoney = (req: Request, res: Response) => {
    const { accountNumber, amount } = req.body;
    const account = bankService.findAccount(accountNumber);
    if (account && amount > 0) {
        account.deposit(Number(amount));
    }
    res.redirect("/");
};
