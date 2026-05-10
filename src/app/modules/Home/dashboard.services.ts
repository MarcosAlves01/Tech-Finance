import { getExpenseByCategoryRepository, getIncomeVsExpenseRepository, getSummaryRepository } from "./dashboard.repository";


export async function getSummaryServices() {
    return await getSummaryRepository()
}

export async function getExpenseByCategoryServices() {
    return await getExpenseByCategoryRepository()
}

export async function getIncomeVsExpenseServices() {
    return await getIncomeVsExpenseRepository()
}