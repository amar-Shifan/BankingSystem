import express from "express";
import { renderHomePage, createAccount, depositMoney } from "../controller/accountController";

const router = express.Router();

router.get("/", renderHomePage);
router.post("/create", createAccount);
router.post("/deposit", depositMoney);

export default router;
