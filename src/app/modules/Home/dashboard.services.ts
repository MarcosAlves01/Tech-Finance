import { getExpenseByCategoryRepository, getIncomeVsExpenseRepository, getRecentTransactionsRepository, getSummaryRepository } from "./dashboard.repository";


export async function getSummaryServices() {
    return await getSummaryRepository()
}

export async function getExpenseByCategoryServices() {
    return await getExpenseByCategoryRepository()
}

export async function getIncomeVsExpenseServices() {
    return await getIncomeVsExpenseRepository()
}

export async function getRecentTransactionsServices() {
    return await getRecentTransactionsRepository()
}